import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';

export interface EvolutionDataPoint {
  date: string;
  value: number;
}

@Component({
  selector: 'app-evolution-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  providers: [provideEchartsCore({ echarts })],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0"><i class="fa fa-chart-line me-2"></i>Evolução do Cachê</h5>
        <div class="btn-group btn-group-sm">
          <button class="btn" [class.btn-primary]="period === '6m'" [class.btn-outline-primary]="period !== '6m'" (click)="setPeriod('6m')">6 meses</button>
          <button class="btn" [class.btn-primary]="period === '1y'" [class.btn-outline-primary]="period !== '1y'" (click)="setPeriod('1y')">1 ano</button>
          <button class="btn" [class.btn-primary]="period === 'all'" [class.btn-outline-primary]="period !== 'all'" (click)="setPeriod('all')">Tudo</button>
        </div>
      </div>
      <div class="card-body">
        <div echarts [options]="chartOptions" [merge]="updateOptions" class="chart-container"></div>
        <div class="row mt-3 text-center">
          <div class="col-md-4">
            <div class="stat-card">
              <span class="stat-value text-success">{{ totalRevenue | currency:'BRL':'symbol':'1.0-0' }}</span>
              <span class="stat-label">Receita Total</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card">
              <span class="stat-value text-primary">{{ avgFee | currency:'BRL':'symbol':'1.0-0' }}</span>
              <span class="stat-label">Cachê Médio</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="stat-card">
              <span class="stat-value text-info">{{ growthPercent }}%</span>
              <span class="stat-label">Crescimento</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      height: 350px;
    }
    .stat-card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .stat-value {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .stat-label {
      font-size: 0.85rem;
      color: #6c757d;
    }
  `]
})
export class EvolutionChartComponent implements OnInit {
  @Input() data: EvolutionDataPoint[] = [];

  chartOptions: any = {};
  updateOptions: any = {};
  period: '6m' | '1y' | 'all' = '1y';

  totalRevenue = 0;
  avgFee = 0;
  growthPercent = 0;

  ngOnInit(): void {
    this.generateMockData();
  }

  private generateMockData(): void {
    // Mock data for demonstration
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const values = [45000, 52000, 48000, 61000, 55000, 72000, 68000, 85000, 78000, 92000, 88000, 105000];

    this.totalRevenue = values.reduce((a, b) => a + b, 0);
    this.avgFee = this.totalRevenue / values.length;
    this.growthPercent = Math.round(((values[values.length - 1] - values[0]) / values[0]) * 100);

    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const p = params[0];
          return `${p.name}<br/>Cachê: R$ ${p.value.toLocaleString('pt-BR')}`;
        }
      },
      xAxis: {
        type: 'category',
        data: months,
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        name: 'Cachê (R$)',
        axisLabel: {
          formatter: (value: number) => `R$ ${(value / 1000).toFixed(0)}k`
        }
      },
      series: [{
        name: 'Cachê',
        type: 'line',
        data: values,
        smooth: true,
        areaStyle: {
          opacity: 0.3
        },
        lineStyle: {
          width: 3
        },
        itemStyle: {
          color: '#28a745'
        }
      }],
      grid: {
        left: '10%',
        right: '5%',
        bottom: '10%'
      }
    };
  }

  setPeriod(period: '6m' | '1y' | 'all'): void {
    this.period = period;
    // In production, this would trigger a reload from the API with the new period filter
    console.log('Period changed to:', period);
  }

  updateData(data: EvolutionDataPoint[]): void {
    this.data = data;
    const values = data.map(d => d.value);
    const dates = data.map(d => d.date);

    this.totalRevenue = values.reduce((a, b) => a + b, 0);
    this.avgFee = this.totalRevenue / values.length;
    if (values.length > 1) {
      this.growthPercent = Math.round(((values[values.length - 1] - values[0]) / values[0]) * 100);
    }

    this.updateOptions = {
      xAxis: { data: dates } as any,
      series: [{ data: values }] as any
    };
  }
}
