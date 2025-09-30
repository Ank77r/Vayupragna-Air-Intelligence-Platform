// Vayupragna Air Intelligence Platform - Premium JavaScript Application

// Application Data Store
const AppData = {
  "current_air_quality": [
    {"id": 1, "location": "Delhi - Anand Vihar", "zone": "Industrial", "latitude": 28.6469, "longitude": 77.3154, "pm25": 93.8, "pm10": 171.2, "no2": 89.5, "so2": 18.1, "co": 1.85, "o3": 42.3, "aqi": 391, "category": "Hazardous", "health_score": 1, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 28.4, "humidity": 62.1, "wind_speed": 8.2},
    {"id": 2, "location": "Delhi - Connaught Place", "zone": "Commercial", "latitude": 28.6315, "longitude": 77.2167, "pm25": 72.4, "pm10": 131.5, "no2": 65.7, "so2": 14.2, "co": 1.42, "o3": 55.1, "aqi": 302, "category": "Hazardous", "health_score": 1, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 31.2, "humidity": 58.3, "wind_speed": 6.7},
    {"id": 3, "location": "Gurgaon - DLF Phase 1", "zone": "Residential", "latitude": 28.4595, "longitude": 77.0266, "pm25": 55.9, "pm10": 98.4, "no2": 41.8, "so2": 9.7, "co": 0.89, "o3": 67.2, "aqi": 233, "category": "Very Unhealthy", "health_score": 2, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 29.8, "humidity": 65.4, "wind_speed": 5.3},
    {"id": 4, "location": "Faridabad - Sector 16A", "zone": "Industrial", "latitude": 28.4089, "longitude": 77.3178, "pm25": 148.4, "pm10": 289.7, "no2": 97.3, "so2": 22.6, "co": 2.18, "o3": 38.9, "aqi": 619, "category": "Hazardous", "health_score": 1, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 32.7, "humidity": 71.2, "wind_speed": 4.9},
    {"id": 5, "location": "Noida - Sector 62", "zone": "IT Hub", "latitude": 28.6270, "longitude": 77.3733, "pm25": 31.0, "pm10": 54.8, "no2": 33.7, "so2": 7.3, "co": 0.67, "o3": 71.4, "aqi": 129, "category": "Unhealthy for Sensitive Groups", "health_score": 5, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 27.9, "humidity": 59.8, "wind_speed": 7.1},
    {"id": 6, "location": "Ghaziabad - Indirapuram", "zone": "Residential", "latitude": 28.6410, "longitude": 77.3807, "pm25": 67.2, "pm10": 125.8, "no2": 52.3, "so2": 11.4, "co": 1.23, "o3": 48.7, "aqi": 280, "category": "Very Unhealthy", "health_score": 2, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 30.1, "humidity": 68.9, "wind_speed": 6.8},
    {"id": 7, "location": "Delhi - Dwarka", "zone": "Residential", "latitude": 28.5921, "longitude": 77.0460, "pm25": 58.9, "pm10": 98.7, "no2": 45.6, "so2": 9.8, "co": 1.05, "o3": 61.2, "aqi": 246, "category": "Very Unhealthy", "health_score": 2, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 29.5, "humidity": 61.7, "wind_speed": 7.3},
    {"id": 8, "location": "Delhi - Rohini", "zone": "Residential", "latitude": 28.7041, "longitude": 77.1025, "pm25": 42.1, "pm10": 76.8, "no2": 38.9, "so2": 8.2, "co": 0.87, "o3": 69.5, "aqi": 175, "category": "Unhealthy", "health_score": 3, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 28.9, "humidity": 59.4, "wind_speed": 8.1},
    {"id": 9, "location": "Gurugram - Cyber City", "zone": "IT Hub", "latitude": 28.4942, "longitude": 77.0855, "pm25": 48.7, "pm10": 87.3, "no2": 41.2, "so2": 7.9, "co": 0.92, "o3": 73.8, "aqi": 203, "category": "Very Unhealthy", "health_score": 2, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 31.8, "humidity": 55.6, "wind_speed": 5.9},
    {"id": 10, "location": "Faridabad - Ballabgarh", "zone": "Industrial", "latitude": 28.3376, "longitude": 77.3251, "pm25": 156.3, "pm10": 298.4, "no2": 103.7, "so2": 28.9, "co": 2.45, "o3": 35.2, "aqi": 652, "category": "Hazardous", "health_score": 1, "timestamp": "2025-09-30T12:20:14.411956", "temperature": 33.2, "humidity": 72.8, "wind_speed": 4.2}
  ],
  "policy_scenarios": [
    {"id": 1, "name": "Odd-Even Vehicle Restriction", "description": "Restrict vehicles based on license plate numbers to reduce traffic emissions", "target_pollutants": ["NO2", "CO", "PM2.5"], "expected_reduction": {"NO2": 15, "CO": 20, "PM2.5": 8}, "economic_impact": -2.3, "implementation_cost": 0.5, "affected_population": 2000000, "timeline": "30 days", "effectiveness": 78, "feasibility": 85},
    {"id": 2, "name": "Industrial Emission Control", "description": "Mandatory emission control systems for top 50 industries", "target_pollutants": ["SO2", "NO2", "PM10"], "expected_reduction": {"SO2": 35, "NO2": 25, "PM10": 30}, "economic_impact": -0.8, "implementation_cost": 5.2, "affected_population": 500000, "timeline": "6 months", "effectiveness": 92, "feasibility": 67},
    {"id": 3, "name": "Green Transport Initiative", "description": "Increase public transport and EV adoption by 40%", "target_pollutants": ["NO2", "CO", "PM2.5"], "expected_reduction": {"NO2": 25, "CO": 30, "PM2.5": 15}, "economic_impact": 1.8, "implementation_cost": 12.5, "affected_population": 3000000, "timeline": "12 months", "effectiveness": 88, "feasibility": 72},
    {"id": 4, "name": "Construction Dust Control", "description": "Mandatory dust suppression at all construction sites", "target_pollutants": ["PM10", "PM2.5"], "expected_reduction": {"PM10": 20, "PM2.5": 12}, "economic_impact": -0.3, "implementation_cost": 0.8, "affected_population": 1200000, "timeline": "3 months", "effectiveness": 65, "feasibility": 90}
  ],
  "anomaly_events": [
    {"id": 1, "timestamp": "2025-09-30T10:20:14.411956", "location": "Faridabad - Ballabgarh", "type": "Illegal Industrial Burning", "confidence": 94, "pollutants": {"PM2.5": 285, "PM10": 420, "SO2": 45}, "status": "Under Investigation", "severity": "Critical", "source": "Textile Manufacturing Unit", "coordinates": [28.3376, 77.3251]},
    {"id": 2, "timestamp": "2025-09-29T18:20:14.411956", "location": "Delhi - Anand Vihar", "type": "Traffic Congestion Spike", "confidence": 87, "pollutants": {"NO2": 125, "CO": 3.8}, "status": "Resolved", "severity": "High", "source": "Highway Accident", "coordinates": [28.6469, 77.3154]},
    {"id": 3, "timestamp": "2025-09-29T06:20:14.411956", "location": "Gurgaon - DLF Phase 1", "type": "Construction Dust Violation", "confidence": 91, "pollutants": {"PM10": 180, "PM2.5": 95}, "status": "Notice Issued", "severity": "Medium", "source": "Metro Construction Site", "coordinates": [28.4595, 77.0266]},
    {"id": 4, "timestamp": "2025-09-28T14:45:22.411956", "location": "Noida - Sector 62", "type": "Crop Burning Detection", "confidence": 89, "pollutants": {"PM2.5": 165, "PM10": 245}, "status": "Monitoring", "severity": "High", "source": "Agricultural Fields", "coordinates": [28.6270, 77.3733]}
  ],
  "citizen_reports": [
    {"id": 1, "timestamp": "2025-09-30T08:15:22", "location": "Delhi - Rohini", "type": "Industrial Smoke", "severity": "High", "description": "Heavy black smoke from nearby factory chimney", "verified": true, "reward_points": 18, "user_id": "citizen_4738", "photo_url": "/api/photos/report_1.jpg", "coordinates": [28.7041, 77.1025]},
    {"id": 2, "timestamp": "2025-09-29T14:32:11", "location": "Noida - Sector 62", "type": "Construction Dust", "severity": "Medium", "description": "Excessive dust from construction site without water spraying", "verified": true, "reward_points": 12, "user_id": "citizen_2847", "photo_url": "/api/photos/report_2.jpg", "coordinates": [28.6270, 77.3733]},
    {"id": 3, "timestamp": "2025-09-29T19:45:33", "location": "Gurgaon - DLF Phase 1", "type": "Vehicle Emissions", "severity": "Medium", "description": "Multiple vehicles emitting visible exhaust", "verified": false, "reward_points": 8, "user_id": "citizen_5921", "photo_url": null, "coordinates": [28.4595, 77.0266]},
    {"id": 4, "timestamp": "2025-09-28T11:20:45", "location": "Delhi - Connaught Place", "type": "Burning Waste", "severity": "High", "description": "Open waste burning near market area", "verified": true, "reward_points": 22, "user_id": "citizen_7384", "photo_url": "/api/photos/report_4.jpg", "coordinates": [28.6315, 77.2167]},
    {"id": 5, "timestamp": "2025-09-27T16:55:12", "location": "Faridabad - Sector 16A", "type": "Dust Storm", "severity": "Low", "description": "Natural dust storm reducing visibility", "verified": true, "reward_points": 6, "user_id": "citizen_1239", "photo_url": null, "coordinates": [28.4089, 77.3178]}
  ],
  "dashboard_stats": {
    "total_sensors": 10,
    "active_alerts": 4,
    "citizen_reports_today": 12,
    "citizen_reports_total": 1847,
    "avg_aqi_delhi": 335,
    "worst_location": "Faridabad - Ballabgarh",
    "best_location": "Noida - Sector 62", 
    "data_accuracy": 94.7,
    "system_uptime": 99.2,
    "alerts_resolved_today": 7,
    "policy_simulations_run": 23
  },
  "forecast_data": [
    {"hour": 0, "timestamp": "2025-09-30T19:00:00", "aqi": 298, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 92},
    {"hour": 1, "timestamp": "2025-09-30T20:00:00", "aqi": 285, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 89},
    {"hour": 2, "timestamp": "2025-09-30T21:00:00", "aqi": 267, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 87},
    {"hour": 3, "timestamp": "2025-09-30T22:00:00", "aqi": 245, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 85},
    {"hour": 6, "timestamp": "2025-10-01T01:00:00", "aqi": 198, "category": "Unhealthy", "location": "Delhi Average", "confidence": 78},
    {"hour": 12, "timestamp": "2025-10-01T07:00:00", "aqi": 234, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 82},
    {"hour": 18, "timestamp": "2025-10-01T13:00:00", "aqi": 287, "category": "Very Unhealthy", "location": "Delhi Average", "confidence": 88},
    {"hour": 24, "timestamp": "2025-10-01T19:00:00", "aqi": 312, "category": "Hazardous", "location": "Delhi Average", "confidence": 85}
  ]
};

// Application State
const AppState = {
  currentSection: 'dashboard',
  selectedScenario: null,
  airQualityMap: null,
  charts: {},
  isLoading: false,
  lastUpdated: new Date(),
  sidebarCollapsed: false
};

// Utility Functions
const Utils = {
  // AQI Color Mapping
  getAQIColor(aqi) {
    if (aqi <= 50) return '#10B981';      // Good
    if (aqi <= 100) return '#84CC16';     // Moderate
    if (aqi <= 150) return '#F59E0B';     // Unhealthy for Sensitive
    if (aqi <= 200) return '#EF4444';     // Unhealthy
    if (aqi <= 300) return '#9333EA';     // Very Unhealthy
    return '#DC2626';                     // Hazardous
  },

  // AQI Category
  getAQICategory(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  },

  // Format Timestamp
  formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Format Time Ago
  timeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  },

  // Animate Number
  animateNumber(element, start, end, duration = 1000) {
    const startTime = performance.now();
    const difference = end - start;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (difference * this.easeOutCubic(progress));
      
      element.textContent = Math.round(current);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  },

  // Easing Function
  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
};

// Toast Notification System
const ToastManager = {
  container: null,

  init() {
    this.container = document.getElementById('toastContainer');
  },

  show(message, type = 'info', duration = 4000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="color: var(--text-primary); font-weight: 500;">${message}</div>
        <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    this.container.appendChild(toast);

    // Auto remove after duration
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.animation = 'toastSlideIn 0.3s reverse';
        setTimeout(() => toast.remove(), 300);
      }
    }, duration);

    return toast;
  },

  success(message) {
    return this.show(message, 'success');
  },

  error(message) {
    return this.show(message, 'error');
  },

  warning(message) {
    return this.show(message, 'warning');
  }
};

// Loading Manager
const LoadingManager = {
  show() {
    AppState.isLoading = true;
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.classList.remove('hidden');
    }
  },

  hide() {
    AppState.isLoading = false;
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 2000); // Show loading for at least 2 seconds for professional effect
    }
  }
};

// Navigation Manager
const NavigationManager = {
  init() {
    this.bindEvents();
    this.updatePageTitle('dashboard');
  },

  bindEvents() {
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;
        this.navigateTo(section);
      });
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileMenuToggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
    }

    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', this.toggleSidebar.bind(this));
    }
  },

  navigateTo(section) {
    // Update nav state
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');

    // Update page title
    this.updatePageTitle(section);
    AppState.currentSection = section;

    // Initialize section-specific functionality
    this.initializeSection(section);
  },

  updatePageTitle(section) {
    const titles = {
      dashboard: { title: 'Live Dashboard', subtitle: 'Real-time air quality monitoring and insights' },
      monitoring: { title: 'Live Monitoring', subtitle: 'Detailed sensor network status and readings' },
      policy: { title: 'Policy Simulator', subtitle: 'Simulate environmental policies and their impact' },
      analytics: { title: 'Analytics Hub', subtitle: 'Advanced data visualization and trend analysis' },
      citizens: { title: 'Citizen Reports', subtitle: 'Community-driven pollution monitoring' },
      alerts: { title: 'Alert Center', subtitle: 'Real-time anomaly detection and notifications' }
    };

    const titleData = titles[section] || titles.dashboard;
    document.getElementById('pageTitle').textContent = titleData.title;
    document.getElementById('pageSubtitle').textContent = titleData.subtitle;
  },

  initializeSection(section) {
    switch (section) {
      case 'dashboard':
        DashboardManager.init();
        break;
      case 'monitoring':
        MonitoringManager.init();
        break;
      case 'policy':
        PolicyManager.init();
        break;
      case 'analytics':
        AnalyticsManager.init();
        break;
      case 'citizens':
        CitizenManager.init();
        break;
      case 'alerts':
        AlertManager.init();
        break;
    }
  },

  toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  },

  toggleSidebar() {
    AppState.sidebarCollapsed = !AppState.sidebarCollapsed;
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (AppState.sidebarCollapsed) {
      sidebar.classList.add('collapsed');
      mainContent.classList.add('expanded');
    } else {
      sidebar.classList.remove('collapsed');
      mainContent.classList.remove('expanded');
    }
  }
};

// Dashboard Manager
const DashboardManager = {
  init() {
    this.updateMetrics();
    this.updateOverview();
    this.initializeMap();
    this.initializeForecastChart();
    this.renderRecentAlerts();
  },

  updateMetrics() {
    const stats = AppData.dashboard_stats;
    
    // Animate metric values
    const totalSensors = document.getElementById('totalSensors');
    const criticalAlerts = document.getElementById('criticalAlerts');
    const reportsToday = document.getElementById('reportsToday');
    const systemUptime = document.getElementById('systemUptime');

    if (totalSensors) Utils.animateNumber(totalSensors, 0, stats.total_sensors, 1000);
    if (criticalAlerts) Utils.animateNumber(criticalAlerts, 0, stats.active_alerts, 1200);
    if (reportsToday) Utils.animateNumber(reportsToday, 0, stats.citizen_reports_today, 1400);
    if (systemUptime) {
      setTimeout(() => {
        systemUptime.textContent = stats.system_uptime + '%';
      }, 1600);
    }
  },

  updateOverview() {
    const stats = AppData.dashboard_stats;
    const worstLocation = AppData.current_air_quality.find(item => 
      item.location.includes('Ballabgarh')) || AppData.current_air_quality[9];
    const bestLocation = AppData.current_air_quality.find(item => 
      item.location.includes('Noida')) || AppData.current_air_quality[4];

    // Update AQI values
    const avgAqi = document.getElementById('avgAqi');
    const worstLocationEl = document.getElementById('worstLocation');
    const worstAqi = document.getElementById('worstAqi');
    const bestLocationEl = document.getElementById('bestLocation');
    const bestAqi = document.getElementById('bestAqi');

    if (avgAqi) Utils.animateNumber(avgAqi, 0, stats.avg_aqi_delhi, 1500);
    if (worstLocationEl) worstLocationEl.textContent = worstLocation.location;
    if (worstAqi) Utils.animateNumber(worstAqi, 0, worstLocation.aqi, 1700);
    if (bestLocationEl) bestLocationEl.textContent = bestLocation.location;
    if (bestAqi) Utils.animateNumber(bestAqi, 0, bestLocation.aqi, 1900);
  },

  initializeMap() {
    if (AppState.airQualityMap) return;

    const mapElement = document.getElementById('airQualityMap');
    if (!mapElement) return;

    AppState.airQualityMap = L.map('airQualityMap').setView([28.6139, 77.2090], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      className: 'map-tiles'
    }).addTo(AppState.airQualityMap);

    // Add custom markers for each location
    AppData.current_air_quality.forEach(location => {
      const color = Utils.getAQIColor(location.aqi);
      
      const marker = L.circleMarker([location.latitude, location.longitude], {
        radius: Math.max(8, Math.min(20, location.aqi / 30)),
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(AppState.airQualityMap);

      // Enhanced popup content
      const popupContent = `
        <div style="min-width: 200px; font-family: Inter, sans-serif;">
          <div style="font-weight: 600; font-size: 16px; margin-bottom: 8px; color: #1f2937;">${location.location}</div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <div style="font-size: 24px; font-weight: 700; color: ${color};">${location.aqi}</div>
            <div style="background: ${color}; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">${location.category}</div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; color: #6b7280;">
            <div>PM2.5: <strong>${location.pm25} μg/m³</strong></div>
            <div>PM10: <strong>${location.pm10} μg/m³</strong></div>
            <div>Temperature: <strong>${location.temperature}°C</strong></div>
            <div>Humidity: <strong>${location.humidity}%</strong></div>
          </div>
          <button onclick="ModalManager.showLocationDetails(${location.id})" 
                  style="margin-top: 12px; background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 500;">
            View Details
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
    });
  },

  initializeForecastChart() {
    const ctx = document.getElementById('forecastChart');
    if (!ctx || AppState.charts.forecast) return;

    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');

    AppState.charts.forecast = new Chart(ctx, {
      type: 'line',
      data: {
        labels: AppData.forecast_data.map(item => {
          const hour = new Date(item.timestamp).getHours();
          return hour + ':00';
        }),
        datasets: [{
          label: 'AQI Forecast',
          data: AppData.forecast_data.map(item => item.aqi),
          borderColor: '#3B82F6',
          backgroundColor: gradient,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            cornerRadius: 12,
            displayColors: false,
            callbacks: {
              title: function(context) {
                const dataPoint = AppData.forecast_data[context[0].dataIndex];
                return Utils.formatTimestamp(dataPoint.timestamp);
              },
              label: function(context) {
                const dataPoint = AppData.forecast_data[context.dataIndex];
                return [
                  `AQI: ${context.parsed.y}`,
                  `Category: ${dataPoint.category}`,
                  `Confidence: ${dataPoint.confidence}%`
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#94a3b8',
              font: {
                family: 'Inter'
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#94a3b8',
              font: {
                family: 'Inter'
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    });
  },

  renderRecentAlerts() {
    const alertsList = document.getElementById('recentAlerts');
    if (!alertsList) return;

    const recentAlerts = AppData.anomaly_events.slice(0, 3);
    
    alertsList.innerHTML = recentAlerts.map(alert => `
      <div class="alert-item ${alert.severity.toLowerCase()}" onclick="ModalManager.showAlertDetails(${alert.id})">
        <div class="alert-header">
          <div class="alert-title">${alert.type}</div>
          <div class="alert-time">${Utils.timeAgo(alert.timestamp)}</div>
        </div>
        <div class="alert-location">${alert.location}</div>
        <div class="alert-confidence">Confidence: ${alert.confidence}% • ${alert.status}</div>
      </div>
    `).join('');
  }
};

// Policy Manager
const PolicyManager = {
  init() {
    this.renderScenarios();
    this.bindEvents();
  },

  bindEvents() {
    const runSimulationBtn = document.getElementById('runSimulation');
    if (runSimulationBtn) {
      runSimulationBtn.addEventListener('click', this.runSimulation.bind(this));
    }
  },

  renderScenarios() {
    const scenariosList = document.getElementById('scenariosList');
    if (!scenariosList) return;

    scenariosList.innerHTML = AppData.policy_scenarios.map(scenario => `
      <div class="scenario-card ${AppState.selectedScenario === scenario.id ? 'active' : ''}" 
           onclick="PolicyManager.selectScenario(${scenario.id})">
        <div class="scenario-title">${scenario.name}</div>
        <div class="scenario-description">${scenario.description}</div>
        <div class="scenario-metrics">
          <div class="metric">
            <div class="metric-value">${scenario.timeline}</div>
            <div class="metric-label">Timeline</div>
          </div>
          <div class="metric">
            <div class="metric-value">₹${scenario.implementation_cost}B</div>
            <div class="metric-label">Cost</div>
          </div>
          <div class="metric">
            <div class="metric-value">${scenario.effectiveness}%</div>
            <div class="metric-label">Effectiveness</div>
          </div>
        </div>
      </div>
    `).join('');
  },

  selectScenario(scenarioId) {
    AppState.selectedScenario = scenarioId;
    this.renderScenarios();
    this.showScenarioResults(scenarioId);
  },

  showScenarioResults(scenarioId) {
    const scenario = AppData.policy_scenarios.find(s => s.id === scenarioId);
    if (!scenario) return;

    const resultsContainer = document.getElementById('simulationResults');
    resultsContainer.innerHTML = `
      <div style="padding: 32px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h4 style="font-size: 24px; font-weight: 600; color: #f8fafc; margin-bottom: 8px;">${scenario.name}</h4>
          <p style="color: #94a3b8; font-size: 16px;">Impact Analysis & Projections</p>
        </div>
        
        <div style="display: grid; gap: 32px;">
          <div>
            <h5 style="font-size: 18px; font-weight: 600; color: #f8fafc; margin-bottom: 16px;">Expected Pollution Reduction</h5>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              ${Object.entries(scenario.expected_reduction).map(([pollutant, reduction]) => `
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 16px; text-align: center; min-width: 100px;">
                  <div style="font-size: 12px; color: #94a3b8; margin-bottom: 4px;">${pollutant}</div>
                  <div style="font-size: 20px; font-weight: 700; color: #10b981;">-${reduction}%</div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div>
            <h5 style="font-size: 18px; font-weight: 600; color: #f8fafc; margin-bottom: 16px;">Economic & Social Impact</h5>
            <div style="display: grid; gap: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">
                <span style="color: #cbd5e1;">GDP Impact:</span>
                <span style="font-weight: 600; color: ${scenario.economic_impact > 0 ? '#10b981' : '#f59e0b'};">
                  ${scenario.economic_impact > 0 ? '+' : ''}${scenario.economic_impact}%
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">
                <span style="color: #cbd5e1;">Implementation Cost:</span>
                <span style="font-weight: 600; color: #f8fafc;">₹${scenario.implementation_cost}B</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">
                <span style="color: #cbd5e1;">Affected Population:</span>
                <span style="font-weight: 600; color: #f8fafc;">${(scenario.affected_population / 1000000).toFixed(1)}M people</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">
                <span style="color: #cbd5e1;">Feasibility Score:</span>
                <span style="font-weight: 600; color: #3b82f6;">${scenario.feasibility}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  runSimulation() {
    if (!AppState.selectedScenario) {
      ToastManager.warning('Please select a policy scenario first');
      return;
    }

    ToastManager.success('Simulation started successfully');
    
    // Simulate processing time
    const runBtn = document.getElementById('runSimulation');
    runBtn.textContent = 'Running...';
    runBtn.disabled = true;

    setTimeout(() => {
      runBtn.textContent = 'Run Simulation';
      runBtn.disabled = false;
      ToastManager.success('Simulation completed successfully');
    }, 3000);
  }
};

// Analytics Manager
const AnalyticsManager = {
  init() {
    this.initializeTrendsChart();
    this.initializeCompositionChart();
  },

  initializeTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx || AppState.charts.trends) return;

    const locations = AppData.current_air_quality.slice(0, 6);
    
    AppState.charts.trends = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: locations.map(loc => loc.location.split(' - ')[1] || loc.location),
        datasets: [{
          label: 'Current AQI',
          data: locations.map(loc => loc.aqi),
          backgroundColor: locations.map(loc => Utils.getAQIColor(loc.aqi) + '80'),
          borderColor: locations.map(loc => Utils.getAQIColor(loc.aqi)),
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            cornerRadius: 12
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#94a3b8',
              font: {
                family: 'Inter'
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#94a3b8',
              font: {
                family: 'Inter'
              }
            }
          }
        }
      }
    });
  },

  initializeCompositionChart() {
    const ctx = document.getElementById('compositionChart');
    if (!ctx || AppState.charts.composition) return;

    // Calculate average pollutant levels
    const avgData = AppData.current_air_quality.reduce((acc, location) => {
      acc.pm25 += location.pm25;
      acc.pm10 += location.pm10;
      acc.no2 += location.no2;
      acc.so2 += location.so2;
      acc.co += location.co;
      acc.o3 += location.o3;
      return acc;
    }, { pm25: 0, pm10: 0, no2: 0, so2: 0, co: 0, o3: 0 });

    const count = AppData.current_air_quality.length;
    Object.keys(avgData).forEach(key => {
      avgData[key] = Math.round(avgData[key] / count * 10) / 10;
    });

    AppState.charts.composition = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['PM2.5', 'PM10', 'NO2', 'SO2', 'CO', 'O3'],
        datasets: [{
          data: [avgData.pm25, avgData.pm10, avgData.no2, avgData.so2, avgData.co * 10, avgData.o3],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#94a3b8',
              padding: 20,
              font: {
                family: 'Inter',
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            cornerRadius: 12
          }
        }
      }
    });
  }
};

// Citizen Manager
const CitizenManager = {
  init() {
    this.renderReports();
    this.bindEvents();
  },

  bindEvents() {
    const submitReportBtn = document.getElementById('submitReport');
    if (submitReportBtn) {
      submitReportBtn.addEventListener('click', () => {
        ModalManager.openModal('reportModal');
      });
    }
  },

  renderReports() {
    const reportsList = document.getElementById('reportsList');
    if (!reportsList) return;

    reportsList.innerHTML = AppData.citizen_reports.map(report => `
      <div class="report-item">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-weight: 600; color: #f8fafc;">${report.type}</div>
          <div style="padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500; ${
            report.verified 
              ? 'background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2);'
              : 'background: rgba(245, 158, 11, 0.1); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.2);'
          }">
            ${report.verified ? 'Verified' : 'Pending'}
          </div>
        </div>
        <div style="font-size: 14px; color: #94a3b8; margin-bottom: 8px;">
          ${report.location} • ${Utils.formatTimestamp(report.timestamp)}
        </div>
        <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 8px;">
          Severity: ${report.severity} • ${report.description}
        </div>
        <div style="font-size: 13px; color: #3b82f6; font-weight: 500;">
          +${report.reward_points} points earned
        </div>
      </div>
    `).join('');
  }
};

// Monitoring Manager
const MonitoringManager = {
  init() {
    this.renderSensors();
  },

  renderSensors() {
    const sensorsGrid = document.getElementById('sensorsGrid');
    if (!sensorsGrid) return;

    sensorsGrid.innerHTML = AppData.current_air_quality.map(sensor => `
      <div class="sensor-card" onclick="ModalManager.showLocationDetails(${sensor.id})">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div style="font-weight: 600; color: #f8fafc; font-size: 16px;">${sensor.location}</div>
          <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite;"></div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <div style="font-size: 32px; font-weight: 700; color: ${Utils.getAQIColor(sensor.aqi)};">${sensor.aqi}</div>
          <div style="font-size: 14px; color: #94a3b8;">${sensor.category}</div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; color: #cbd5e1;">
          <div>PM2.5: <strong>${sensor.pm25}</strong></div>
          <div>PM10: <strong>${sensor.pm10}</strong></div>
          <div>NO2: <strong>${sensor.no2}</strong></div>
          <div>Temp: <strong>${sensor.temperature}°C</strong></div>
        </div>
      </div>
    `).join('');
  }
};

// Alert Manager
const AlertManager = {
  currentFilter: 'all',

  init() {
    this.bindEvents();
    this.renderAlerts();
  },

  bindEvents() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderAlerts();
      });
    });
  },

  renderAlerts() {
    const alertsContainer = document.getElementById('alertsContainer');
    if (!alertsContainer) return;

    let alerts = [...AppData.anomaly_events];
    
    if (this.currentFilter !== 'all') {
      alerts = alerts.filter(alert => {
        if (this.currentFilter === 'resolved') {
          return alert.status.toLowerCase().includes('resolved');
        }
        return alert.severity.toLowerCase() === this.currentFilter;
      });
    }

    alertsContainer.innerHTML = alerts.map(alert => `
      <div class="alert-item ${alert.severity.toLowerCase()} ${alert.status.toLowerCase().includes('resolved') ? 'resolved' : ''}"
           onclick="ModalManager.showAlertDetails(${alert.id})">
        <div class="alert-header">
          <div class="alert-title">${alert.type}</div>
          <div class="alert-time">${Utils.formatTimestamp(alert.timestamp)}</div>
        </div>
        <div class="alert-location">${alert.location}</div>
        <div style="font-size: 13px; color: #94a3b8; margin-bottom: 12px;">
          Status: ${alert.status} • Confidence: ${alert.confidence}% • Source: ${alert.source}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${Object.entries(alert.pollutants).map(([pollutant, value]) => 
            `<span style="padding: 4px 8px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; border-radius: 12px; font-size: 12px; font-weight: 500;">
              ${pollutant}: ${value}
            </span>`
          ).join('')}
        </div>
      </div>
    `).join('');
  }
};

// Modal Manager
const ModalManager = {
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  },

  showLocationDetails(locationId) {
    const location = AppData.current_air_quality.find(loc => loc.id === locationId);
    if (!location) return;

    const modalName = document.getElementById('modalLocationName');
    const modalBody = document.getElementById('locationModalBody');

    modalName.textContent = location.location;
    modalBody.innerHTML = `
      <div style="display: grid; gap: 24px;">
        <div style="text-align: center; padding: 24px; background: rgba(59, 130, 246, 0.05); border-radius: 16px; border: 1px solid rgba(59, 130, 246, 0.1);">
          <div style="font-size: 48px; font-weight: 800; color: ${Utils.getAQIColor(location.aqi)}; line-height: 1; margin-bottom: 8px;">
            ${location.aqi}
          </div>
          <div style="font-size: 18px; color: #cbd5e1; margin-bottom: 4px;">Air Quality Index</div>
          <div style="display: inline-block; padding: 8px 16px; background: ${Utils.getAQIColor(location.aqi)}; color: white; border-radius: 16px; font-weight: 600;">
            ${location.category}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          ${[
            { label: 'PM2.5', value: `${location.pm25} μg/m³`, icon: '🌫️' },
            { label: 'PM10', value: `${location.pm10} μg/m³`, icon: '💨' },
            { label: 'NO2', value: `${location.no2} μg/m³`, icon: '🚗' },
            { label: 'SO2', value: `${location.so2} μg/m³`, icon: '🏭' },
            { label: 'CO', value: `${location.co} mg/m³`, icon: '⚠️' },
            { label: 'O3', value: `${location.o3} μg/m³`, icon: '☀️' },
            { label: 'Temperature', value: `${location.temperature}°C`, icon: '🌡️' },
            { label: 'Humidity', value: `${location.humidity}%`, icon: '💧' },
            { label: 'Wind Speed', value: `${location.wind_speed} km/h`, icon: '💨' },
            { label: 'Zone Type', value: location.zone, icon: '📍' }
          ].map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px;">
              <span style="color: #94a3b8; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">${item.icon}</span>
                ${item.label}
              </span>
              <span style="font-weight: 600; color: #f8fafc;">${item.value}</span>
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; padding: 24px; background: rgba(255, 255, 255, 0.03); border-radius: 16px;">
          <h4 style="font-size: 18px; font-weight: 600; color: #f8fafc; margin-bottom: 16px;">Health Impact Assessment</h4>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="font-size: 32px; font-weight: 700; color: #3b82f6;">${location.health_score}/10</div>
            <div style="font-size: 14px; color: #94a3b8; line-height: 1.5; max-width: 300px;">
              ${location.health_score <= 2 ? '⚠️ Hazardous - Avoid all outdoor activities' :
                location.health_score <= 4 ? '🔶 Unhealthy - Limit prolonged outdoor exposure' :
                location.health_score <= 6 ? '🟡 Moderate - Sensitive groups should be cautious' :
                '✅ Good - Air quality is acceptable for outdoor activities'}
            </div>
          </div>
        </div>
      </div>
    `;

    this.openModal('locationModal');
  },

  showAlertDetails(alertId) {
    const alert = AppData.anomaly_events.find(a => a.id === alertId);
    if (!alert) return;

    ToastManager.show(`Alert Details: ${alert.type} at ${alert.location}`, 'info');
  }
};

// Data Update Manager
const DataUpdateManager = {
  intervalId: null,

  start() {
    // Update every 30 seconds
    this.intervalId = setInterval(() => {
      this.simulateDataUpdate();
      AppState.lastUpdated = new Date();
      this.updateLastUpdatedTime();
    }, 30000);
  },

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },

  simulateDataUpdate() {
    // Simulate real-time data changes
    AppData.current_air_quality.forEach(location => {
      const variation = (Math.random() - 0.5) * 30;
      location.aqi = Math.max(0, Math.round(location.aqi + variation));
      location.category = Utils.getAQICategory(location.aqi);
      
      // Small variations in other parameters
      location.pm25 = Math.max(0, location.pm25 + (Math.random() - 0.5) * 10);
      location.temperature = Math.max(0, location.temperature + (Math.random() - 0.5) * 2);
    });

    // Update dashboard if it's the current section
    if (AppState.currentSection === 'dashboard') {
      DashboardManager.updateOverview();
      if (AppState.airQualityMap) {
        // Update map markers with new data
        AppState.airQualityMap.eachLayer(layer => {
          if (layer instanceof L.CircleMarker) {
            AppState.airQualityMap.removeLayer(layer);
          }
        });
        DashboardManager.initializeMap();
      }
    }
  },

  updateLastUpdatedTime() {
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
      lastUpdatedEl.textContent = 'Just now';
    }
  }
};

// Form Manager
const FormManager = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
      reportForm.addEventListener('submit', this.submitReport.bind(this));
    }

    // Header action buttons
    const refreshBtn = document.getElementById('refreshData');
    const exportBtn = document.getElementById('exportData');
    const addReportBtn = document.getElementById('addReport');

    if (refreshBtn) {
      refreshBtn.addEventListener('click', this.refreshData.bind(this));
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', this.exportData.bind(this));
    }

    if (addReportBtn) {
      addReportBtn.addEventListener('click', () => {
        ModalManager.openModal('reportModal');
      });
    }
  },

  submitReport(e) {
    e.preventDefault();
    
    const formData = {
      location: document.getElementById('reportLocation').value,
      type: document.getElementById('reportType').value,
      severity: document.getElementById('reportSeverity').value,
      description: document.getElementById('reportDescription').value,
      timestamp: new Date().toISOString(),
      verified: false,
      reward_points: 0
    };

    // Add to reports
    AppData.citizen_reports.unshift({
      id: Date.now(),
      ...formData
    });

    // Update stats
    AppData.dashboard_stats.citizen_reports_today++;

    ToastManager.success('Report submitted successfully! You will earn reward points once verified.');
    ModalManager.closeModal('reportModal');
    
    // Reset form
    document.getElementById('reportForm').reset();

    // Update citizen reports if on that section
    if (AppState.currentSection === 'citizens') {
      CitizenManager.renderReports();
    }
  },

  refreshData() {
    const refreshBtn = document.getElementById('refreshData');
    refreshBtn.style.animation = 'spin 1s linear infinite';
    
    setTimeout(() => {
      refreshBtn.style.animation = '';
      DataUpdateManager.simulateDataUpdate();
      ToastManager.success('Data refreshed successfully');
    }, 1000);
  },

  exportData() {
    ToastManager.success('Data export initiated. Download will start shortly.');
    
    // Simulate export
    setTimeout(() => {
      const dataStr = JSON.stringify(AppData, null, 2);
      const dataBlob = new Blob([dataStr], {type: 'application/json'});
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `vayupragna-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1000);
  }
};

// Application Initialization
class VayupragnaApp {
  constructor() {
    this.init();
  }

  async init() {
    // Show loading screen
    LoadingManager.show();

    // Initialize managers
    ToastManager.init();
    NavigationManager.init();
    FormManager.init();

    // Initialize modal close handlers
    this.initializeModalHandlers();

    // Start data updates
    DataUpdateManager.start();

    // Hide loading screen after initialization
    LoadingManager.hide();

    // Show welcome message
    setTimeout(() => {
      ToastManager.success('Welcome to Vayupragna Air Intelligence Platform');
    }, 2500);
  }

  initializeModalHandlers() {
    // Close modal when clicking backdrop
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
          ModalManager.closeModal(modal.id);
        }
      });
    });

    // ESC key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
          ModalManager.closeModal(modal.id);
        });
      }
    });
  }
}

// Global functions for HTML onclick handlers
function closeModal(modalId) {
  ModalManager.closeModal(modalId);
}

// Add spin animation for refresh button
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new VayupragnaApp();
});