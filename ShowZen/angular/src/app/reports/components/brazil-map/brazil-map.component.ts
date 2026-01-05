import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
    selector: 'app-brazil-map',
    standalone: true,
    imports: [CommonModule, NgxEchartsDirective],
    providers: [provideEchartsCore({ echarts })],
    template: `
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0"><i class="fa fa-map me-2"></i>Distribuição de Eventos no Brasil</h5>
      </div>
      <div class="card-body">
        <div echarts [options]="chartOptions" [merge]="updateOptions" class="map-container"></div>
        <div class="legend mt-3 d-flex justify-content-center gap-4">
          <span><span class="badge bg-success">●</span> Muitos eventos</span>
          <span><span class="badge bg-warning">●</span> Alguns eventos</span>
          <span><span class="badge bg-secondary">●</span> Poucos eventos</span>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .map-container {
      width: 100%;
      height: 500px;
    }
  `]
})
export class BrazilMapComponent implements OnInit {
    chartOptions: any = {};
    updateOptions: any = {};

    // State abbreviations to full names
    private stateNames: Record<string, string> = {
        'AC': 'Acre', 'AL': 'Alagoas', 'AP': 'Amapá', 'AM': 'Amazonas',
        'BA': 'Bahia', 'CE': 'Ceará', 'DF': 'Distrito Federal', 'ES': 'Espírito Santo',
        'GO': 'Goiás', 'MA': 'Maranhão', 'MT': 'Mato Grosso', 'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais', 'PA': 'Pará', 'PB': 'Paraíba', 'PR': 'Paraná',
        'PE': 'Pernambuco', 'PI': 'Piauí', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul', 'RO': 'Rondônia', 'RR': 'Roraima', 'SC': 'Santa Catarina',
        'SP': 'São Paulo', 'SE': 'Sergipe', 'TO': 'Tocantins'
    };

    ngOnInit(): void {
        this.loadMapData();
    }

    private loadMapData(): void {
        // For now, use placeholder data. In production, this would come from an API
        const mockData = [
            { name: 'São Paulo', value: 120 },
            { name: 'Rio de Janeiro', value: 85 },
            { name: 'Minas Gerais', value: 45 },
            { name: 'Bahia', value: 30 },
            { name: 'Paraná', value: 25 },
            { name: 'Rio Grande do Sul', value: 20 },
            { name: 'Santa Catarina', value: 18 },
            { name: 'Goiás', value: 15 },
            { name: 'Pernambuco', value: 12 },
            { name: 'Ceará', value: 10 }
        ];

        // Note: To fully implement the Brazil map, you need to register the Brazil GeoJSON with ECharts
        // For now, using a simple bar chart as a placeholder for the map visualization
        this.chartOptions = {
            title: {
                text: 'Eventos por Estado',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            xAxis: {
                type: 'value',
                name: 'Eventos'
            },
            yAxis: {
                type: 'category',
                data: mockData.map(d => d.name).reverse(),
                axisLabel: { interval: 0 }
            },
            series: [{
                name: 'Eventos',
                type: 'bar',
                data: mockData.map(d => d.value).reverse(),
                itemStyle: {
                    color: '#007bff'
                }
            }],
            grid: {
                left: '15%',
                right: '10%'
            }
        };
    }

    updateData(data: { state: string; count: number }[]): void {
        // Transform API data to chart format
        const chartData = data.map(d => ({
            name: this.stateNames[d.state] || d.state,
            value: d.count
        }));

        this.updateOptions = {
            yAxis: {
                data: chartData.map(d => d.name)
            },
            series: [{
                data: chartData.map(d => d.value)
            }]
        };
    }
}
