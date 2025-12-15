$ErrorActionPreference = "Stop"
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

function Run-Step {
    param(
        [string] $Name,
        [scriptblock] $Action
    )

    try {
        & $Action

        if ($LASTEXITCODE -ne 0) {
            throw "Step '$Name' exited with code $LASTEXITCODE"
        }
    }
    catch {
        [Console]::Error.WriteLine("Step '$Name' FAILED")
        exit -1
    }
}

Run-Step "InstallLibs" {
    Set-Location (Join-Path $scriptRoot "..\..\")
    abp install-libs
}

Run-Step "InitialMigration" {
    Set-Location (Join-Path $scriptRoot "../../ShowZen")
    dotnet build
    dotnet ef migrations add Initial
}

Run-Step "DbMigrator" {
    Set-Location (Join-Path $scriptRoot "../../ShowZen")
    dotnet run --migrate-database
}

Run-Step "DevCert" {
    Set-Location (Join-Path $scriptRoot "../../ShowZen")
    dotnet dev-certs https -v -ep openiddict.pfx -p be952743-47b9-468d-8cbd-02eb436264ef
}

exit 0
