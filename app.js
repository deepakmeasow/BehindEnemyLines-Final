// Application data
const weeklyData = {
  "Week 1": {
    "phase": "Foundation & Assessment",
    "objectives": [
      "Understand current component architecture and codebase",
      "Meet all team members individually",
      "Assess existing processes and pain points",
      "Establish communication channels"
    ],
    "key_activities": [
      "Schedule 1-on-1 meetings with each team member",
      "Review component documentation and architecture",
      "Understand each project's usage of the component",
      "Set up team communication tools (Slack, Discord, etc.)",
      "Create shared calendar for team meetings",
      "Document current team dynamics and skills"
    ],
    "deliverables": [
      "Team skills matrix",
      "Component usage map across projects", 
      "Initial assessment report",
      "Meeting schedule established"
    ],
    "success_metrics": [
      "All 5 team members interviewed",
      "Component architecture understood", 
      "Communication channels active",
      "Initial pain points identified"
    ]
  },
  "Week 2": {
    "phase": "Foundation & Assessment", 
    "objectives": [
      "Deep dive into component technical details",
      "Understand project dependencies and timelines",
      "Identify quick wins and immediate issues", 
      "Build relationships with project managers"
    ],
    "key_activities": [
      "Shadow team members on different projects",
      "Review component code, tests, and documentation",
      "Meet with project managers using the component",
      "Identify technical debt and bottlenecks",
      "Set up development environment",
      "Create component health dashboard"
    ],
    "deliverables": [
      "Component technical assessment",
      "Project dependency mapping",
      "Quick wins identification list",
      "Stakeholder contact list"
    ],
    "success_metrics": [
      "All project dependencies mapped",
      "Technical debt catalog created",
      "3+ quick wins identified",
      "Stakeholder relationships established"
    ]
  },
  "Week 3": {
    "phase": "Structure Implementation",
    "objectives": [
      "Establish team processes and workflows",
      "Implement component governance model",
      "Set up regular team meetings",
      "Define roles and responsibilities"
    ],
    "key_activities": [
      "Create component change management process",
      "Establish code review guidelines",
      "Set up weekly team stand-ups",
      "Define component ownership boundaries",
      "Implement version control strategy",
      "Create component roadmap template"
    ],
    "deliverables": [
      "Team charter document",
      "Component governance framework",
      "Meeting templates and agendas",
      "Roles and responsibilities matrix"
    ],
    "success_metrics": [
      "Team charter agreed by all members",
      "First team stand-up conducted",
      "Change process documented",
      "Clear ownership boundaries set"
    ]
  },
  "Week 4": {
    "phase": "Structure Implementation",
    "objectives": [
      "Implement prioritization framework",
      "Establish component quality standards",
      "Create cross-project coordination process",
      "Set team goals and KPIs"
    ],
    "key_activities": [
      "Create component backlog prioritization criteria",
      "Define quality gates and testing standards", 
      "Establish project sync meetings",
      "Set team OKRs (Objectives and Key Results)",
      "Implement component metrics dashboard",
      "Create escalation procedures"
    ],
    "deliverables": [
      "Prioritization framework document",
      "Quality standards checklist",
      "Team OKRs and KPIs",
      "Metrics dashboard"
    ],
    "success_metrics": [
      "Prioritization framework adopted",
      "Quality standards implemented",
      "Team KPIs defined and tracked",
      "Cross-project sync established"
    ]
  },
  "Week 5": {
    "phase": "Process Optimization",
    "objectives": [
      "Optimize component development workflow", 
      "Implement automated testing and CI/CD",
      "Establish documentation standards",
      "Create knowledge sharing practices"
    ],
    "key_activities": [
      "Set up automated testing pipeline",
      "Implement continuous integration",
      "Create component API documentation",
      "Establish tech talks and knowledge sessions",
      "Optimize code review process",
      "Create component usage guidelines"
    ],
    "deliverables": [
      "Automated testing pipeline",
      "CI/CD workflow",
      "Updated documentation",
      "Knowledge sharing schedule"
    ],
    "success_metrics": [
      "Automated tests covering 80%+ of component",
      "CI/CD pipeline operational",
      "Documentation up-to-date",
      "First knowledge sharing session completed"
    ]
  },
  "Week 6": {
    "phase": "Process Optimization",
    "objectives": [
      "Refine cross-project coordination",
      "Implement component monitoring",
      "Optimize team communication",
      "Address technical debt"
    ],
    "key_activities": [
      "Set up component performance monitoring",
      "Create project impact assessment process",
      "Implement team retrospectives",
      "Begin technical debt reduction initiatives",
      "Optimize meeting schedules",
      "Create component change notifications"
    ],
    "deliverables": [
      "Monitoring dashboard",
      "Impact assessment templates",
      "Retrospective format",
      "Technical debt reduction plan"
    ],
    "success_metrics": [
      "Component monitoring active",
      "Impact assessments standardized", 
      "First retrospective completed",
      "Technical debt plan approved"
    ]
  },
  "Week 7": {
    "phase": "Team Development",
    "objectives": [
      "Focus on team skill development",
      "Implement mentoring programs", 
      "Create career development plans",
      "Establish innovation practices"
    ],
    "key_activities": [
      "Conduct skill gap analysis",
      "Create individual development plans",
      "Set up peer mentoring system",
      "Allocate innovation time (20% time)",
      "Plan team training sessions",
      "Create component architecture discussions"
    ],
    "deliverables": [
      "Skills assessment report",
      "Individual development plans",
      "Mentoring program structure",
      "Innovation time framework"
    ],
    "success_metrics": [
      "All team members have development plans",
      "Mentoring pairs established",
      "Innovation time allocated",
      "Skills gaps identified and addressed"
    ]
  },
  "Week 8": {
    "phase": "Team Development",
    "objectives": [
      "Strengthen team collaboration",
      "Implement performance feedback system",
      "Create team building activities",
      "Establish component evangelism"
    ],
    "key_activities": [
      "Implement 360-degree feedback",
      "Create team collaboration guidelines",
      "Plan team building activities",
      "Create component showcase presentations",
      "Establish best practices sharing",
      "Set up external community engagement"
    ],
    "deliverables": [
      "Feedback system implementation",
      "Team collaboration charter",
      "Team building calendar",
      "Component showcase materials"
    ],
    "success_metrics": [
      "Feedback system operational",
      "Team collaboration improved (survey)",
      "First team building activity completed",
      "Component showcased to organization"
    ]
  },
  "Week 9": {
    "phase": "Ongoing Management",
    "objectives": [
      "Establish long-term component strategy",
      "Implement strategic planning process",
      "Create stakeholder engagement framework",
      "Begin quarterly planning cycle"
    ],
    "key_activities": [
      "Create component roadmap (6-month view)",
      "Establish quarterly planning meetings",
      "Set up stakeholder advisory board",
      "Implement strategic decision framework",
      "Create component evolution strategy",
      "Plan resource allocation for quarters"
    ],
    "deliverables": [
      "6-month component roadmap",
      "Quarterly planning process",
      "Stakeholder engagement plan",
      "Strategic framework document"
    ],
    "success_metrics": [
      "Roadmap approved by stakeholders",
      "Quarterly planning process established",
      "Stakeholder board formed",
      "Strategic decisions framework active"
    ]
  },
  "Week 10": {
    "phase": "Ongoing Management",
    "objectives": [
      "Focus on team performance optimization",
      "Implement advanced metrics and analytics", 
      "Create component scaling strategy",
      "Establish continuous improvement culture"
    ],
    "key_activities": [
      "Implement advanced performance metrics",
      "Create component usage analytics",
      "Plan for component scaling challenges",
      "Establish continuous improvement process",
      "Set up component health monitoring",
      "Create performance optimization initiatives"
    ],
    "deliverables": [
      "Advanced metrics dashboard",
      "Component analytics reports",
      "Scaling strategy document", 
      "Continuous improvement framework"
    ],
    "success_metrics": [
      "Advanced metrics tracking operational",
      "Component usage patterns analyzed",
      "Scaling strategy approved",
      "Improvement suggestions implemented"
    ]
  },
  "Week 11": {
    "phase": "Ongoing Management", 
    "objectives": [
      "Strengthen external relationships",
      "Implement knowledge management system",
      "Create component sustainability plan",
      "Focus on team retention and growth"
    ],
    "key_activities": [
      "Build relationships with other component teams",
      "Implement knowledge base system",
      "Create component maintenance strategy",
      "Plan team growth and succession",
      "Establish component best practices repository",
      "Create external partnership opportunities"
    ],
    "deliverables": [
      "External relationships map",
      "Knowledge management system",
      "Sustainability plan",
      "Team growth strategy"
    ],
    "success_metrics": [
      "Partnerships with 2+ other teams",
      "Knowledge base active and used",
      "Sustainability plan approved",
      "Team retention at 100%"
    ]
  },
  "Week 12": {
    "phase": "Ongoing Management",
    "objectives": [
      "Conduct comprehensive performance review",
      "Plan for next quarter goals",
      "Celebrate team achievements",
      "Establish mature leadership practices"
    ],
    "key_activities": [
      "Conduct 90-day performance review",
      "Set next quarter objectives",
      "Organize team celebration event",
      "Document lessons learned",
      "Create leadership reflection process",
      "Plan advanced team initiatives"
    ],
    "deliverables": [
      "90-day performance report",
      "Next quarter goals",
      "Team celebration summary",
      "Lessons learned document"
    ],
    "success_metrics": [
      "All team goals achieved >80%",
      "Next quarter planned",
      "Team satisfaction >4.5/5",
      "Leadership effectiveness validated"
    ]
  }
};

// Application state
let currentWeek = 1;
let completionState = {};
let notes = {};

// Phase color mapping
const phaseColors = {
  "Foundation & Assessment": "phase-foundation",
  "Structure Implementation": "phase-structure", 
  "Process Optimization": "phase-optimization",
  "Team Development": "phase-development",
  "Ongoing Management": "phase-management"
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  loadState();
  initializeUI();
  displayWeek(currentWeek);
  setupEventListeners();
});

// Load state from localStorage
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('leadershipTracker') || '{}');
    completionState = saved.completionState || {};
    notes = saved.notes || {};
    currentWeek = saved.currentWeek || 1;
  } catch (e) {
    console.warn('Error loading saved state:', e);
    completionState = {};
    notes = {};
    currentWeek = 1;
  }
}

// Save state to localStorage
function saveState() {
  try {
    const state = {
      completionState,
      notes,
      currentWeek
    };
    localStorage.setItem('leadershipTracker', JSON.stringify(state));
  } catch (e) {
    console.warn('Error saving state:', e);
  }
}

// Initialize UI components
function initializeUI() {
  renderWeeksList();
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('prev-week-btn').addEventListener('click', () => navigateWeek(-1));
  document.getElementById('next-week-btn').addEventListener('click', () => navigateWeek(1));
  document.getElementById('save-notes-btn').addEventListener('click', saveNotes);
  document.getElementById('export-btn').addEventListener('click', showExportModal);
}

// Render weeks list in sidebar
function renderWeeksList() {
  const weeksList = document.getElementById('weeks-list');
  weeksList.innerHTML = '';
  
  for (let i = 1; i <= 12; i++) {
    const weekKey = `Week ${i}`;
    const weekData = weeklyData[weekKey];
    const progress = calculateWeekProgress(weekKey);
    
    const weekItem = document.createElement('div');
    weekItem.className = `week-item ${i === currentWeek ? 'active' : ''}`;
    
    // Fix: Use proper event listener instead of onclick attribute
    weekItem.addEventListener('click', () => displayWeek(i));
    
    const progressClass = progress < 50 ? 'progress-not-started' : 
                         progress < 90 ? 'progress-in-progress' : 'progress-completed';
    
    const phaseClass = phaseColors[weekData.phase] || '';
    weekItem.classList.add(phaseClass);
    
    weekItem.innerHTML = `
      <div class="week-item-info">
        <div class="week-number">Week ${i}</div>
        <div class="week-phase">${weekData.phase}</div>
      </div>
      <div class="week-progress-mini ${progressClass}">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
    `;
    
    weeksList.appendChild(weekItem);
  }
}

// Display specific week
function displayWeek(weekNum) {
  currentWeek = weekNum;
  const weekKey = `Week ${weekNum}`;
  const weekData = weeklyData[weekKey];
  
  if (!weekData) {
    console.error('Week data not found for:', weekKey);
    return;
  }
  
  // Update header
  document.getElementById('current-week-num').textContent = weekNum;
  document.getElementById('week-title').textContent = weekKey;
  document.getElementById('phase-badge').textContent = weekData.phase;
  
  // Apply phase color to badge
  const phaseBadge = document.getElementById('phase-badge');
  phaseBadge.className = `phase-badge ${phaseColors[weekData.phase] || ''}`;
  
  // Render content sections
  renderObjectives(weekKey, weekData.objectives);
  renderActivities(weekKey, weekData.key_activities);
  renderDeliverables(weekKey, weekData.deliverables);
  renderMetrics(weekKey, weekData.success_metrics);
  
  // Load notes
  document.getElementById('week-notes').value = notes[weekKey] || '';
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prev-week-btn');
  const nextBtn = document.getElementById('next-week-btn');
  
  if (prevBtn) prevBtn.disabled = weekNum === 1;
  if (nextBtn) nextBtn.disabled = weekNum === 12;
  
  // Update progress bars
  updateProgressBars();
  
  // Update active week in sidebar
  renderWeeksList();
  
  // Reset expanded sections to collapsed state
  resetExpandedSections();
  
  saveState();
}

// Navigate between weeks
function navigateWeek(direction) {
  const newWeek = currentWeek + direction;
  if (newWeek >= 1 && newWeek <= 12) {
    displayWeek(newWeek);
  }
}

// Render objectives
function renderObjectives(weekKey, objectives) {
  const container = document.getElementById('objectives-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  objectives.forEach((objective, index) => {
    const itemKey = `${weekKey}-objective-${index}`;
    const isCompleted = completionState[itemKey] || false;
    
    const item = document.createElement('div');
    item.className = 'objective-item';
    
    const checkbox = document.createElement('div');
    checkbox.className = `item-checkbox ${isCompleted ? 'checked' : ''}`;
    checkbox.addEventListener('click', () => toggleCompletion(itemKey));
    
    const text = document.createElement('div');
    text.className = `item-text ${isCompleted ? 'completed' : ''}`;
    text.textContent = objective;
    
    item.appendChild(checkbox);
    item.appendChild(text);
    container.appendChild(item);
  });
}

// Render activities
function renderActivities(weekKey, activities) {
  const container = document.getElementById('activities-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  activities.forEach((activity, index) => {
    const itemKey = `${weekKey}-activity-${index}`;
    const isCompleted = completionState[itemKey] || false;
    
    const item = document.createElement('div');
    item.className = 'activity-item';
    
    const checkbox = document.createElement('div');
    checkbox.className = `item-checkbox ${isCompleted ? 'checked' : ''}`;
    checkbox.addEventListener('click', () => toggleCompletion(itemKey));
    
    const text = document.createElement('div');
    text.className = `item-text ${isCompleted ? 'completed' : ''}`;
    text.textContent = activity;
    
    item.appendChild(checkbox);
    item.appendChild(text);
    container.appendChild(item);
  });
}

// Render deliverables
function renderDeliverables(weekKey, deliverables) {
  const container = document.getElementById('deliverables-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  deliverables.forEach((deliverable, index) => {
    const itemKey = `${weekKey}-deliverable-${index}`;
    const isCompleted = completionState[itemKey] || false;
    
    const item = document.createElement('div');
    item.className = 'deliverable-item';
    
    const checkbox = document.createElement('div');
    checkbox.className = `item-checkbox ${isCompleted ? 'checked' : ''}`;
    checkbox.addEventListener('click', () => toggleCompletion(itemKey));
    
    const text = document.createElement('div');
    text.className = `item-text ${isCompleted ? 'completed' : ''}`;
    text.textContent = deliverable;
    
    item.appendChild(checkbox);
    item.appendChild(text);
    container.appendChild(item);
  });
}

// Render metrics
function renderMetrics(weekKey, metrics) {
  const container = document.getElementById('metrics-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  metrics.forEach((metric, index) => {
    const itemKey = `${weekKey}-metric-${index}`;
    const isCompleted = completionState[itemKey] || false;
    
    const item = document.createElement('div');
    item.className = 'metric-item';
    
    const checkbox = document.createElement('div');
    checkbox.className = `item-checkbox ${isCompleted ? 'checked' : ''}`;
    checkbox.addEventListener('click', () => toggleCompletion(itemKey));
    
    const text = document.createElement('div');
    text.className = `item-text ${isCompleted ? 'completed' : ''}`;
    text.textContent = metric;
    
    item.appendChild(checkbox);
    item.appendChild(text);
    container.appendChild(item);
  });
}

// Toggle completion state
function toggleCompletion(itemKey) {
  completionState[itemKey] = !completionState[itemKey];
  saveState();
  displayWeek(currentWeek); // Refresh display to update progress and visual state
}

// Calculate week progress
function calculateWeekProgress(weekKey) {
  const weekData = weeklyData[weekKey];
  if (!weekData) return 0;
  
  const totalItems = weekData.objectives.length + 
                    weekData.key_activities.length + 
                    weekData.deliverables.length + 
                    weekData.success_metrics.length;
  
  let completedItems = 0;
  
  // Count completed objectives
  weekData.objectives.forEach((_, index) => {
    if (completionState[`${weekKey}-objective-${index}`]) completedItems++;
  });
  
  // Count completed activities
  weekData.key_activities.forEach((_, index) => {
    if (completionState[`${weekKey}-activity-${index}`]) completedItems++;
  });
  
  // Count completed deliverables
  weekData.deliverables.forEach((_, index) => {
    if (completionState[`${weekKey}-deliverable-${index}`]) completedItems++;
  });
  
  // Count completed metrics
  weekData.success_metrics.forEach((_, index) => {
    if (completionState[`${weekKey}-metric-${index}`]) completedItems++;
  });
  
  return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
}

// Calculate overall progress
function calculateOverallProgress() {
  let totalProgress = 0;
  for (let i = 1; i <= 12; i++) {
    totalProgress += calculateWeekProgress(`Week ${i}`);
  }
  return Math.round(totalProgress / 12);
}

// Update progress bars
function updateProgressBars() {
  const weekProgress = calculateWeekProgress(`Week ${currentWeek}`);
  const overallProgress = calculateOverallProgress();
  
  // Update week progress
  const weekProgressBar = document.getElementById('week-progress');
  const weekPercentage = document.getElementById('week-percentage');
  if (weekProgressBar) weekProgressBar.style.width = `${weekProgress}%`;
  if (weekPercentage) weekPercentage.textContent = `${weekProgress}%`;
  
  // Update overall progress
  const overallProgressBar = document.getElementById('overall-progress');
  const overallPercentageEl = document.getElementById('overall-percentage');
  if (overallProgressBar) overallProgressBar.style.width = `${overallProgress}%`;
  if (overallPercentageEl) overallPercentageEl.textContent = `${overallProgress}%`;
}

// Toggle expandable sections - Fixed implementation
function toggleSection(sectionName) {
  const content = document.getElementById(`${sectionName}-content`);
  const icon = document.getElementById(`${sectionName}-icon`);
  
  if (!content || !icon) {
    console.warn(`Section elements not found for: ${sectionName}`);
    return;
  }
  
  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    content.classList.add('expanded');
    icon.classList.add('expanded');
    icon.textContent = '▲';
  } else {
    content.classList.remove('expanded');
    content.classList.add('collapsed');
    icon.classList.remove('expanded');
    icon.textContent = '▼';
  }
}

// Reset expanded sections
function resetExpandedSections() {
  const sections = ['activities', 'deliverables', 'metrics'];
  sections.forEach(section => {
    const content = document.getElementById(`${section}-content`);
    const icon = document.getElementById(`${section}-icon`);
    
    if (content && icon) {
      content.classList.remove('expanded');
      content.classList.add('collapsed');
      icon.classList.remove('expanded');
      icon.textContent = '▼';
    }
  });
}

// Save notes
function saveNotes() {
  const weekKey = `Week ${currentWeek}`;
  const notesElement = document.getElementById('week-notes');
  const btn = document.getElementById('save-notes-btn');
  
  if (!notesElement || !btn) return;
  
  const notesText = notesElement.value;
  notes[weekKey] = notesText;
  saveState();
  
  // Show brief confirmation
  const originalText = btn.textContent;
  const originalBg = btn.style.backgroundColor;
  btn.textContent = 'Saved!';
  btn.style.backgroundColor = 'var(--color-success)';
  btn.style.color = 'var(--color-btn-primary-text)';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = originalBg;
    btn.style.color = '';
  }, 1500);
}

// Show export modal
function showExportModal() {
  generateExportReport();
  const modal = document.getElementById('export-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('export-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Generate export report
function generateExportReport() {
  const exportContent = document.getElementById('export-content');
  if (!exportContent) return;
  
  const overallProgress = calculateOverallProgress();
  
  // Calculate summary stats
  let completedWeeks = 0;
  let inProgressWeeks = 0;
  let notStartedWeeks = 0;
  
  for (let i = 1; i <= 12; i++) {
    const progress = calculateWeekProgress(`Week ${i}`);
    if (progress >= 90) completedWeeks++;
    else if (progress >= 50) inProgressWeeks++;
    else notStartedWeeks++;
  }
  
  let reportHTML = `
    <div class="export-summary">
      <div class="export-stat">
        <span class="export-stat-number">${overallProgress}%</span>
        <span class="export-stat-label">Overall Progress</span>
      </div>
      <div class="export-stat">
        <span class="export-stat-number">${completedWeeks}</span>
        <span class="export-stat-label">Completed Weeks</span>
      </div>
      <div class="export-stat">
        <span class="export-stat-number">${inProgressWeeks}</span>
        <span class="export-stat-label">In Progress</span>
      </div>
      <div class="export-stat">
        <span class="export-stat-number">${notStartedWeeks}</span>
        <span class="export-stat-label">Not Started</span>
      </div>
    </div>
    
    <div class="export-details">
      <h4>Weekly Progress Details</h4>
  `;
  
  for (let i = 1; i <= 12; i++) {
    const weekKey = `Week ${i}`;
    const weekData = weeklyData[weekKey];
    const progress = calculateWeekProgress(weekKey);
    const weekNotes = notes[weekKey] || 'No notes added';
    
    reportHTML += `
      <div class="export-week">
        <div class="export-week-header">
          <div class="export-week-title">${weekKey} - ${weekData.phase}</div>
          <div class="export-week-progress">${progress}% Complete</div>
        </div>
        <div class="export-week-notes"><strong>Notes:</strong> ${weekNotes}</div>
      </div>
    `;
  }
  
  reportHTML += '</div>';
  exportContent.innerHTML = reportHTML;
}

// Copy report to clipboard
function copyReport() {
  const exportContent = document.getElementById('export-content');
  if (!exportContent) return;
  
  const text = exportContent.innerText;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback();
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showCopyFeedback();
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
  
  document.body.removeChild(textArea);
}

// Show copy feedback
function showCopyFeedback() {
  const copyBtn = document.querySelector('.modal-footer .btn--primary');
  if (!copyBtn) return;
  
  const originalText = copyBtn.textContent;
  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = originalText;
  }, 1500);
}

// Global functions for onclick handlers in HTML
window.toggleSection = toggleSection;
window.closeModal = closeModal;
window.copyReport = copyReport;