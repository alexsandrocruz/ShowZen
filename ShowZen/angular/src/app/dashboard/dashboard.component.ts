import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType, Chart, registerables } from 'chart.js';
import { DashboardService } from './dashboard.service';
import { DashboardStats } from './models/dashboard.models';

// Register Chart.js components
Chart.register(...registerables);

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, BaseChartDirective],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private dashboardService = inject(DashboardService);

    stats: DashboardStats | null = null;
    loading = true;
    error: string | null = null;

    // Doughnut chart for events by status
    doughnutChartType: ChartType = 'doughnut';
    doughnutChartData: ChartData<'doughnut'> = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };
    doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            }
        }
    };

    // Bar chart for revenue by month
    barChartType: ChartType = 'bar';
    barChartData: ChartData<'bar'> = {
        labels: [],
        datasets: [{
            data: [],
            label: 'Receita (R$)',
            backgroundColor: 'rgba(102, 126, 234, 0.8)',
            borderColor: 'rgba(102, 126, 234, 1)',
            borderWidth: 1,
            borderRadius: 8
        }]
    };
    barChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => 'R$ ' + Number(value).toLocaleString('pt-BR')
                }
            }
        }
    };

    ngOnInit(): void {
        this.loadStats();
    }

    loadStats(): void {
        this.loading = true;
        this.error = null;

        this.dashboardService.getStats().subscribe({
            next: (data) => {
                console.log('Dashboard Stats received:', data);
                this.stats = data;
                this.updateCharts();
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading dashboard stats:', err);
                this.error = 'Erro ao carregar estatísticas';
                this.loading = false;
            }
        });
    }

    private updateCharts(): void {
        if (!this.stats) return;

        // Update doughnut chart
        this.doughnutChartData = {
            labels: this.stats.eventsByStatus.map(e => e.status),
            datasets: [{
                data: this.stats.eventsByStatus.map(e => e.count),
                backgroundColor: this.stats.eventsByStatus.map(e => e.color)
            }]
        };

        // Update bar chart
        this.barChartData = {
            labels: this.stats.revenueByMonth.map(r => r.month),
            datasets: [{
                data: this.stats.revenueByMonth.map(r => r.amount),
                label: 'Receita (R$)',
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1,
                borderRadius: 8
            }]
        };
    }

    hasRevenueData(): boolean {
        return this.stats?.revenueByMonth.some(r => r.amount > 0) ?? false;
    }

    formatCurrency(value: number): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit'
        });
    }

    getStatusClass(status: string): string {
        const statusMap: { [key: string]: string } = {
            'Lead': 'bg-secondary',
            'Proposta': 'bg-warning',
            'Confirmado': 'bg-success',
            'Em Andamento': 'bg-primary',
            'Concluído': 'bg-info',
            'Cancelado': 'bg-danger',
            'Perdido': 'bg-danger'
        };
        return statusMap[status] || 'bg-secondary';
    }
}
