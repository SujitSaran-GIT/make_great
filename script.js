/* ===== Weekly Learning Timetable Dashboard ===== */
/* Production-quality vanilla JS implementation */

// ===== Category Configuration =====
const CATEGORIES = {
    Programming: { color: 'var(--cat-programming)', icon: 'fa-code', desc: 'Core programming skills' },
    Database: { color: 'var(--cat-database)', icon: 'fa-database', desc: 'Database & SQL skills' },
    'Machine Learning': { color: 'var(--cat-ml)', icon: 'fa-brain', desc: 'ML fundamentals & practice' },
    'Deep Learning': { color: 'var(--cat-dl)', icon: 'fa-network-wired', desc: 'Neural networks & DL' },
    'AI Engineering': { color: 'var(--cat-ai)', icon: 'fa-robot', desc: 'AI systems engineering' },
    'Data Analytics': { color: 'var(--cat-analytics)', icon: 'fa-chart-bar', desc: 'Data analysis tools' },
    Career: { color: 'var(--cat-career)', icon: 'fa-briefcase', desc: 'Career development' },
    Documentation: { color: 'var(--cat-docs)', icon: 'fa-file-alt', desc: 'Document generation' },
    Project: { color: 'var(--cat-project)', icon: 'fa-project-diagram', desc: 'Hands-on project work' },
    Mathematics: { color: 'var(--cat-math)', icon: 'fa-square-root-alt', desc: 'Math & statistics' },
    Class: { color: 'var(--cat-class)', icon: 'fa-chalkboard-teacher', desc: 'Live online class' },
    Break: { color: 'var(--cat-break)', icon: 'fa-coffee', desc: 'Rest & personal time' }
};

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const DAY_LABELS = { monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed', thursday: 'Thu', friday: 'Fri', saturday: 'Sat', sunday: 'Sun' };
const DAY_FULL = { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

// ===== Night Rotation (10PM-12AM) =====
// Cycle: DSA×2, Math/Statistics×2, Java×2, Project×1
const NIGHT_ROTATION = ['DSA', 'DSA', 'Math / Statistics', 'Math / Statistics', 'Java', 'Java', 'Project'];

// ===== Build Schedule Programmatically =====
function buildSchedule() {
    const schedule = {};

    DAYS.forEach((day, dayIndex) => {
        const sessions = [];
        const isWeekend = dayIndex >= 5;
        const isOdd = dayIndex % 2 === 0; // Mon=0 even → Python, NumPy, Deep Learning

        // 06:00-07:00 Python/SQL (weekdays only)
        // if (!isWeekend) {
        //     sessions.push({
        //         id: `${day}-0600`,
        //         start: '06:00',
        //         end: '07:00',
        //         title: isOdd ? 'Python' : 'SQL',
        //         category: isOdd ? 'Programming' : 'Database',
        //         description: isOdd ? 'Python fundamentals and practice' : 'SQL queries and database concepts'
        //     });

        //     // 07:00-08:00 Questions
        //     sessions.push({
        //         id: `${day}-0700`,
        //         start: '07:00',
        //         end: '08:00',
        //         title: isOdd ? 'Python Questions' : 'SQL Questions',
        //         category: isOdd ? 'Programming' : 'Database',
        //         description: isOdd ? 'Practice Python coding questions' : 'Practice SQL problem solving'
        //     });
        // }

        sessions.push({
            id: `${day}-0600`,
            start: '06:00',
            end: '07:00',
            title: isOdd ? 'Python' : 'SQL',
            category: isOdd ? 'Programming' : 'Database',
            description: isOdd ? 'Python fundamentals and practice' : 'SQL queries and database concepts'
        });

        // 07:00-08:00 Questions
        sessions.push({
            id: `${day}-0700`,
            start: '07:00',
            end: '08:00',
            title: isOdd ? 'Python Questions' : 'SQL Questions',
            category: isOdd ? 'Programming' : 'Database',
            description: isOdd ? 'Practice Python coding questions' : 'Practice SQL problem solving'
        });

        // 08:00-09:00 Document Generation (every day)
        sessions.push({
            id: `${day}-0800`,
            start: '08:00',
            end: '09:00',
            title: 'Document Generation',
            category: 'Documentation',
            description: 'Create and refine professional documents'
        });

        // 09:00-10:00 Job Applications (every day)
        sessions.push({
            id: `${day}-0900`,
            start: '09:00',
            end: '10:00',
            title: 'Job Applications',
            category: 'Career',
            description: 'Apply to relevant job opportunities'
        });

        // 10:00-12:00 Machine Learning (every day)
        sessions.push({
            id: `${day}-1000`,
            start: '10:00',
            end: '12:00',
            title: 'Machine Learning',
            category: 'Machine Learning',
            description: 'Deep dive into ML algorithms and implementation'
        });

        // 12:00-13:00 NumPy/Pandas (every day, alternating)
        sessions.push({
            id: `${day}-1200`,
            start: '12:00',
            end: '13:00',
            title: isOdd ? 'NumPy' : 'Pandas',
            category: 'Data Analytics',
            description: isOdd ? 'NumPy array operations and numerical computing' : 'Pandas data manipulation and analysis'
        });

        // 13:00-14:00 Break
        sessions.push({
            id: `${day}-1300`,
            start: '13:00',
            end: '14:00',
            title: 'Break / Free Time',
            category: 'Break',
            description: 'Rest, lunch, or free time'
        });

        // 14:00-16:00 Deep Learning / Power BI (every day, alternating)
        sessions.push({
            id: `${day}-1400`,
            start: '14:00',
            end: '16:00',
            title: isOdd ? 'Deep Learning' : 'Power BI',
            category: isOdd ? 'Deep Learning' : 'Data Analytics',
            description: isOdd ? 'Neural networks, CNNs, RNNs and advanced DL' : 'Business intelligence dashboards with Power BI'
        });

        if (isWeekend) {
            // 16:00-19:00 Weekend Project
            sessions.push({
                id: `${day}-1600`,
                start: '16:00',
                end: '19:00',
                title: 'Project',
                category: 'Project',
                description: 'Dedicated project building session'
            });
        } else {
            // 16:00-17:00 Document Generation (weekdays)
            sessions.push({
                id: `${day}-1600`,
                start: '16:00',
                end: '17:00',
                title: 'Document Generation',
                category: 'Documentation',
                description: 'Afternoon documentation session'
            });

            // 17:00-17:30 Break
            sessions.push({
                id: `${day}-1700`,
                start: '17:00',
                end: '17:30',
                title: 'Break',
                category: 'Break',
                description: 'Short break before online class'
            });

            // 17:30-19:00 Online Class
            sessions.push({
                id: `${day}-1730`,
                start: '17:30',
                end: '19:00',
                title: 'Online Class',
                category: 'Class',
                description: 'Live online learning session'
            });
        }

        // 19:00-21:00 AI Engineering (every day)
        sessions.push({
            id: `${day}-1900`,
            start: '19:00',
            end: '21:00',
            title: 'AI Engineering',
            category: 'AI Engineering',
            description: 'Building production AI systems and pipelines'
        });

        // 21:00-22:00 Personal Time
        sessions.push({
            id: `${day}-2100`,
            start: '21:00',
            end: '22:00',
            title: 'Break / Dinner / Personal Time',
            category: 'Break',
            description: 'Dinner and personal time'
        });

        // 22:00-00:00 Night rotation
        const nightSubject = NIGHT_ROTATION[dayIndex];
        let nightCategory = 'Programming';
        if (nightSubject.includes('Math')) nightCategory = 'Mathematics';
        else if (nightSubject === 'Project') nightCategory = 'Project';
        else if (nightSubject === 'Java') nightCategory = 'Programming';
        else nightCategory = 'Programming'; // DSA

        sessions.push({
            id: `${day}-2200`,
            start: '22:00',
            end: '00:00',
            title: nightSubject,
            category: nightCategory,
            description: `Night study: ${nightSubject}`,
            crossesMidnight: true
        });

        schedule[day] = sessions;
    });

    return schedule;
}

const SCHEDULE = buildSchedule();

// ===== State =====
let selectedDay = null;
let currentFilter = 'all';
let searchQuery = '';
let completions = {};
let activeModalSession = null;

// ===== Utility Functions =====
function parseTime(timeStr) {
    // "06:00" or "00:00" → minutes from midnight
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function formatTime12(timeStr) {
    let [h, m] = timeStr.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
}

function formatDuration(start, end) {
    let s = parseTime(start);
    let e = parseTime(end);
    if (e === 0) e = 24 * 60; // midnight
    if (e < s) e += 24 * 60;
    const mins = e - s;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
}

function getTodayKey() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
}

function getNowMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

function isSessionActive(session) {
    const now = getNowMinutes();
    const start = parseTime(session.start);
    let end = parseTime(session.end);
    if (end === 0) end = 24 * 60;

    if (session.crossesMidnight) {
        // 22:00 - 00:00
        return now >= start || now < 0; // after 22:00 until midnight
    }
    return now >= start && now < end;
}

function isSessionCompleted(session, dayKey) {
    if (completions[session.id]) return true;
    const now = getNowMinutes();
    const today = getTodayKey();
    if (dayKey !== today) {
        // Past days considered completed for progress if selected is today logic
        return false;
    }
    let end = parseTime(session.end);
    if (end === 0) end = 24 * 60;
    if (session.crossesMidnight) {
        return now >= 0 && now < parseTime(session.start) ? false : now >= end % (24 * 60);
        // After midnight before start → not yet; after end → completed
    }
    return now >= end;
}

function getSessionStatus(session, dayKey) {
    if (completions[session.id]) return 'completed';
    const today = getTodayKey();
    if (dayKey !== today) return 'upcoming';

    if (isSessionActive(session)) return 'in-progress';

    const now = getNowMinutes();
    let end = parseTime(session.end);
    if (end === 0) end = 24 * 60;

    if (session.crossesMidnight) {
        if (now >= parseTime(session.start)) return 'in-progress';
        // After midnight the session has ended
        return 'completed';
    }

    if (now >= end) return 'completed';
    return 'upcoming';
}

function getCurrentSession() {
    const today = getTodayKey();
    const sessions = SCHEDULE[today] || [];
    return sessions.find(s => isSessionActive(s) && s.category !== 'Break') ||
        sessions.find(s => isSessionActive(s)) || null;
}

function getNextSession() {
    const today = getTodayKey();
    const sessions = SCHEDULE[today] || [];
    const now = getNowMinutes();

    for (const s of sessions) {
        if (s.category === 'Break') continue;
        const start = parseTime(s.start);
        if (start > now) return s;
        // Handle midnight-crossing: if night session hasn't started
        if (s.crossesMidnight && now < start) return s;
    }

    // If after last session, next is tomorrow's first non-break
    return null;
}

function minutesUntil(session) {
    const now = getNowMinutes();
    let start = parseTime(session.start);
    if (start <= now && !session.crossesMidnight) {
        // Already passed or active
        return 0;
    }
    if (session.crossesMidnight && now >= start) return 0;
    let diff = start - now;
    if (diff < 0) diff += 24 * 60;
    return diff;
}

function formatCountdown(totalMins) {
    const h = Math.floor(totalMins / 60);
    const m = Math.floor(totalMins % 60);
    const s = 0; // seconds handled in live update
    return { h, m };
}

// ===== LocalStorage =====
function loadCompletions() {
    try {
        const data = localStorage.getItem('timetable-completions');
        completions = data ? JSON.parse(data) : {};
    } catch {
        completions = {};
    }
}

function saveCompletions() {
    try {
        localStorage.setItem('timetable-completions', JSON.stringify(completions));
    } catch (e) {
        console.warn('Could not save completions', e);
    }
}

function loadTheme() {
    try {
        const theme = localStorage.getItem('timetable-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
        updateThemeIcon(theme);
        return theme;
    } catch {
        return 'dark';
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem('timetable-theme', theme);
    } catch { }
}

// ===== Rendering =====
function renderDayButtons() {
    const container = document.getElementById('dayButtons');
    const today = getTodayKey();

    container.innerHTML = DAYS.map(day => {
        const isToday = day === today;
        const isWeekend = day === 'saturday' || day === 'sunday';
        const isActive = day === selectedDay;
        return `
            <button class="day-btn ${isActive ? 'active' : ''} ${isToday ? 'is-today' : ''} ${isWeekend ? 'is-weekend' : ''}"
                    data-day="${day}" aria-label="${DAY_FULL[day]}" aria-pressed="${isActive}">
                ${DAY_LABELS[day]}
            </button>
        `;
    }).join('');

    container.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedDay = btn.dataset.day;
            renderDayButtons();
            renderDayView();
            renderWeeklyGrid();
        });
    });
}

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    const cats = ['all', ...Object.keys(CATEGORIES).filter(c => c !== 'Break')];

    container.innerHTML = cats.map(cat => `
        <button class="filter-btn ${currentFilter === cat ? 'active' : ''}" data-cat="${cat}">
            ${cat === 'all' ? 'All' : cat}
        </button>
    `).join('');

    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.cat;
            renderCategoryFilters();
            renderDayView();
        });
    });
}

function filterSessions(sessions) {
    return sessions.filter(s => {
        if (currentFilter !== 'all' && s.category !== currentFilter) return false;
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            return s.title.toLowerCase().includes(q) ||
                s.category.toLowerCase().includes(q) ||
                (s.description || '').toLowerCase().includes(q);
        }
        return true;
    });
}

function renderDayView() {
    const day = selectedDay || getTodayKey();
    const sessions = filterSessions(SCHEDULE[day] || []);
    const isWeekend = day === 'saturday' || day === 'sunday';
    const isToday = day === getTodayKey();

    document.getElementById('selectedDayTitle').textContent = DAY_FULL[day];
    document.getElementById('weekendBadge').style.display = isWeekend ? 'inline' : 'none';
    document.getElementById('todayBadge').style.display = isToday ? 'inline' : 'none';

    // Summary
    const summary = calculateDaySummary(day);
    document.getElementById('daySummary').innerHTML = `
        <div class="summary-item"><span class="label">Study Hours</span><span class="value">${summary.studyHours}h</span></div>
        <div class="summary-item"><span class="label">Sessions</span><span class="value">${summary.sessions}</span></div>
        <div class="summary-item"><span class="label">AI / ML</span><span class="value">${summary.aiml}h</span></div>
        <div class="summary-item"><span class="label">Programming</span><span class="value">${summary.programming}h</span></div>
        <div class="summary-item"><span class="label">Career</span><span class="value">${summary.career}h</span></div>
        <div class="summary-item"><span class="label">Docs</span><span class="value">${summary.docs}h</span></div>
    `;

    // Timeline
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = sessions.map((s, i) => {
        const status = getSessionStatus(s, day);
        const cat = CATEGORIES[s.category] || CATEGORIES.Break;
        const isBreak = s.category === 'Break';
        let remainingHtml = '';

        if (status === 'in-progress' && isToday) {
            let end = parseTime(s.end);
            if (end === 0) end = 24 * 60;
            const now = getNowMinutes();
            let rem = end - now;
            if (rem < 0) rem = 0;
            const rh = Math.floor(rem / 60);
            const rm = rem % 60;
            remainingHtml = `<div class="session-remaining">${rh > 0 ? rh + 'h ' : ''}${rm}m remaining</div>`;
        }

        const statusLabel = status === 'completed' ? '✓ COMPLETED' :
            status === 'in-progress' ? '● IN PROGRESS' : '○ UPCOMING';

        return `
            <div class="timeline-item ${status} ${isBreak ? 'break' : ''}" style="animation-delay: ${i * 0.04}s">
                <div class="session-card ${status} ${isBreak ? 'break-card' : ''}" 
                     data-id="${s.id}" data-day="${day}" tabindex="0" role="button"
                     aria-label="${s.title} from ${formatTime12(s.start)} to ${formatTime12(s.end)}">
                    <div class="session-icon" style="background: ${cat.color}">
                        <i class="fas ${cat.icon}"></i>
                    </div>
                    <div class="session-info">
                        <div class="session-time">${formatTime12(s.start)} – ${formatTime12(s.end)} · ${formatDuration(s.start, s.end)}</div>
                        <div class="session-title">${s.title}</div>
                        <div class="session-category">${s.category}</div>
                        ${remainingHtml}
                    </div>
                    <div class="session-status ${status}">${statusLabel}</div>
                </div>
            </div>
        `;
    }).join('');

    // Card click handlers
    timeline.querySelectorAll('.session-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.id, card.dataset.day));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card.dataset.id, card.dataset.day);
            }
        });
    });
}

function calculateDaySummary(day) {
    const sessions = SCHEDULE[day] || [];
    let studyMins = 0, aiml = 0, programming = 0, career = 0, docs = 0, count = 0;

    sessions.forEach(s => {
        if (s.category === 'Break') return;
        count++;
        let start = parseTime(s.start);
        let end = parseTime(s.end);
        if (end === 0) end = 24 * 60;
        if (end < start) end += 24 * 60;
        const mins = end - start;
        studyMins += mins;

        if (['Machine Learning', 'Deep Learning', 'AI Engineering'].includes(s.category)) aiml += mins;
        if (['Programming', 'Database'].includes(s.category)) programming += mins;
        if (s.category === 'Career') career += mins;
        if (s.category === 'Documentation') docs += mins;
    });

    return {
        studyHours: (studyMins / 60).toFixed(1).replace(/\.0$/, ''),
        sessions: count,
        aiml: (aiml / 60).toFixed(1).replace(/\.0$/, ''),
        programming: (programming / 60).toFixed(1).replace(/\.0$/, ''),
        career: (career / 60).toFixed(1).replace(/\.0$/, ''),
        docs: (docs / 60).toFixed(1).replace(/\.0$/, '')
    };
}

function renderWeeklyGrid() {
    const grid = document.getElementById('weeklyGrid');
    const today = getTodayKey();

    // Collect unique time slots
    const timeSlots = [
        '06:00', '07:00', '08:00', '09:00', '10:00', '12:00',
        '13:00', '14:00', '16:00', '17:00', '17:30', '19:00', '21:00', '22:00'
    ];

    let html = `<table class="grid-table"><thead><tr><th></th>`;
    DAYS.forEach(day => {
        const isToday = day === today;
        html += `<th class="${isToday ? 'today-col' : ''}">
            <span class="day-name">${DAY_LABELS[day]}</span>
            ${isToday ? '<span style="color:var(--color-accent);font-size:0.65rem">TODAY</span>' : ''}
            ${(day === 'saturday' || day === 'sunday') ? '<span style="color:var(--color-accent);font-size:0.6rem">WEEKEND</span>' : ''}
        </th>`;
    });
    html += `</tr></thead><tbody>`;

    // Build a map of sessions by day+start
    const sessionMap = {};
    DAYS.forEach(day => {
        (SCHEDULE[day] || []).forEach(s => {
            sessionMap[`${day}-${s.start}`] = s;
        });
    });

    timeSlots.forEach(time => {
        const now = getNowMinutes();
        const tMins = parseTime(time);
        const isNow = Math.abs(now - tMins) < 30 && now >= tMins;

        html += `<tr class="${isNow ? 'now-indicator' : ''}">`;
        html += `<td class="grid-time">${formatTime12(time)}${isNow ? '<br><span class="now-label">NOW</span>' : ''}</td>`;

        DAYS.forEach(day => {
            const s = sessionMap[`${day}-${time}`];
            if (!s) {
                html += `<td><div class="grid-cell empty"></div></td>`;
                return;
            }

            const status = getSessionStatus(s, day);
            const cat = CATEGORIES[s.category] || CATEGORIES.Break;
            const isBreak = s.category === 'Break';

            html += `<td>
                <div class="grid-cell ${status} ${isBreak ? 'break-cell' : ''}" 
                     data-id="${s.id}" data-day="${day}" style="border-left: 3px solid ${cat.color}">
                    <div class="cell-title">${s.title}</div>
                    <div class="cell-cat">${formatDuration(s.start, s.end)}</div>
                </div>
            </td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    grid.innerHTML = html;

    grid.querySelectorAll('.grid-cell:not(.empty)').forEach(cell => {
        cell.addEventListener('click', () => openModal(cell.dataset.id, cell.dataset.day));
    });
}

function calculateWeeklyStats() {
    let totalMins = 0, sessions = 0, progMins = 0, aimlMins = 0, careerMins = 0, projectMins = 0;

    DAYS.forEach(day => {
        (SCHEDULE[day] || []).forEach(s => {
            if (s.category === 'Break') return;
            sessions++;
            let start = parseTime(s.start);
            let end = parseTime(s.end);
            if (end === 0) end = 24 * 60;
            if (end < start) end += 24 * 60;
            const mins = end - start;
            totalMins += mins;

            if (['Programming', 'Database'].includes(s.category)) progMins += mins;
            if (['Machine Learning', 'Deep Learning', 'AI Engineering'].includes(s.category)) aimlMins += mins;
            if (s.category === 'Career') careerMins += mins;
            if (s.category === 'Project') projectMins += mins;
        });
    });

    return {
        totalHours: Math.round(totalMins / 60),
        sessions,
        programming: Math.round(progMins / 60),
        aiml: Math.round(aimlMins / 60),
        career: Math.round(careerMins / 60),
        project: Math.round(projectMins / 60)
    };
}

function renderStats() {
    const stats = calculateWeeklyStats();
    const container = document.getElementById('statsGrid');

    const items = [
        { label: 'Total Study Hours', value: stats.totalHours + 'h', icon: 'fa-clock', color: 'var(--color-primary)' },
        { label: 'Learning Sessions', value: stats.sessions, icon: 'fa-layer-group', color: 'var(--color-secondary)' },
        { label: 'Programming Hours', value: stats.programming + 'h', icon: 'fa-code', color: 'var(--cat-programming)' },
        { label: 'AI / ML Hours', value: stats.aiml + 'h', icon: 'fa-brain', color: 'var(--cat-ml)' },
        { label: 'Career Hours', value: stats.career + 'h', icon: 'fa-briefcase', color: 'var(--cat-career)' },
        { label: 'Project Hours', value: stats.project + 'h', icon: 'fa-project-diagram', color: 'var(--cat-project)' }
    ];

    container.innerHTML = items.map((item, i) => `
        <div class="stat-card" style="animation: countUp 0.4s ease ${i * 0.05}s both">
            <div class="stat-icon" style="background: ${item.color}">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="stat-value">${item.value}</div>
            <div class="stat-label">${item.label}</div>
        </div>
    `).join('');
}

function renderLegend() {
    const container = document.getElementById('legendItems');
    const items = Object.entries(CATEGORIES).filter(([k]) => k !== 'Break');

    container.innerHTML = items.map(([name, cat]) => `
        <div class="legend-item">
            <span class="legend-dot" style="background: ${cat.color}"></span>
            ${name}
        </div>
    `).join('');
}

function updateProgress() {
    const today = getTodayKey();
    const sessions = (SCHEDULE[today] || []).filter(s => s.category !== 'Break');
    let completed = 0;

    sessions.forEach(s => {
        const status = getSessionStatus(s, today);
        if (status === 'completed') completed++;
    });

    const total = sessions.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    document.getElementById('progressText').textContent = `${completed} / ${total} Sessions`;
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('progressPercent').textContent = pct + '%';
}

function updateHeroAndUpNext() {
    const today = getTodayKey();
    document.getElementById('heroDay').textContent = DAY_FULL[today];

    const current = getCurrentSession();
    const next = getNextSession();

    if (current) {
        document.getElementById('heroCurrent').textContent = current.title;
        document.getElementById('heroCurrentTime').textContent =
            `${formatTime12(current.start)} – ${formatTime12(current.end)}`;
    } else {
        document.getElementById('heroCurrent').textContent = 'No active session';
        document.getElementById('heroCurrentTime').textContent = next ?
            `Next at ${formatTime12(next.start)}` : 'Done for today';
    }

    if (next) {
        document.getElementById('heroNext').textContent = next.title;
        document.getElementById('heroNextTime').textContent = formatTime12(next.start);

        document.getElementById('upNextTitle').textContent = next.title;
        document.getElementById('upNextTime').textContent =
            `${formatTime12(next.start)} – ${formatTime12(next.end)}`;
    } else if (current) {
        document.getElementById('heroNext').textContent = '—';
        document.getElementById('heroNextTime').textContent = '';
        document.getElementById('upNextTitle').textContent = current.title + ' (ongoing)';
        document.getElementById('upNextTime').textContent =
            `${formatTime12(current.start)} – ${formatTime12(current.end)}`;
    } else {
        document.getElementById('heroNext').textContent = '—';
        document.getElementById('heroNextTime').textContent = '';
        document.getElementById('upNextTitle').textContent = 'All done for today';
        document.getElementById('upNextTime').textContent = 'Rest well!';
    }
}

function updateCountdown() {
    const current = getCurrentSession();
    const next = getNextSession();
    const timerEl = document.getElementById('countdownTimer');
    const countdownEl = document.getElementById('countdown');

    if (current && current.category !== 'Break') {
        let end = parseTime(current.end);
        if (end === 0) end = 24 * 60;
        const now = new Date();
        const nowMins = now.getHours() * 60 + now.getMinutes();
        let remMins = end - nowMins;
        if (remMins < 0) remMins = 0;
        const secs = 59 - now.getSeconds();
        const h = Math.floor(remMins / 60);
        const m = remMins % 60;
        timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        countdownEl.querySelector('span').textContent = 'Remaining:';
    } else if (next) {
        const now = new Date();
        const nowTotal = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        let startTotal = parseTime(next.start) * 60;
        let diff = startTotal - nowTotal;
        if (diff < 0) diff += 24 * 3600;
        const h = Math.floor(diff / 3600);
        const m = Math.floor((diff % 3600) / 60);
        const s = diff % 60;
        timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        countdownEl.querySelector('span').textContent = 'Starts in:';
    } else {
        timerEl.textContent = '--:--:--';
        countdownEl.querySelector('span').textContent = '';
    }
}

function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);

    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    document.getElementById('liveClock').textContent =
        `${String(h).padStart(2, '0')}:${m}:${s} ${ampm}`;
}

// ===== Modal =====
function openModal(sessionId, day) {
    const sessions = SCHEDULE[day] || [];
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    activeModalSession = { session, day };
    const cat = CATEGORIES[session.category] || CATEGORIES.Break;
    const status = getSessionStatus(session, day);

    document.getElementById('modalIcon').style.background = cat.color;
    document.getElementById('modalIcon').innerHTML = `<i class="fas ${cat.icon}"></i>`;
    document.getElementById('modalTitle').textContent = session.title;
    document.getElementById('modalTime').textContent =
        `${formatTime12(session.start)} – ${formatTime12(session.end)}`;
    document.getElementById('modalDuration').textContent = formatDuration(session.start, session.end);
    document.getElementById('modalCategory').textContent = session.category;
    document.getElementById('modalDesc').textContent = session.description || cat.desc;

    const statusLabels = {
        completed: '✓ Completed',
        'in-progress': '● In Progress',
        upcoming: '○ Upcoming'
    };
    document.getElementById('modalStatus').textContent = statusLabels[status];
    document.getElementById('modalStatus').style.color =
        status === 'completed' || status === 'in-progress' ? 'var(--color-accent)' : 'var(--text-muted)';

    const btn = document.getElementById('completeBtn');
    if (completions[session.id] || status === 'completed') {
        btn.innerHTML = '<i class="fas fa-check-double"></i> Completed';
        btn.classList.add('completed');
    } else {
        btn.innerHTML = '<i class="fas fa-check"></i> Mark as Completed';
        btn.classList.remove('completed');
    }

    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    activeModalSession = null;
}

// ===== Theme =====
function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next === 'light' ? 'light' : '');
    saveTheme(next);
    updateThemeIcon(next);
}

// ===== Init & Event Listeners =====
function init() {
    loadCompletions();
    loadTheme();

    selectedDay = getTodayKey();

    renderDayButtons();
    renderCategoryFilters();
    renderDayView();
    renderWeeklyGrid();
    renderStats();
    renderLegend();
    updateProgress();
    updateHeroAndUpNext();
    updateClock();
    updateCountdown();

    // Clock & live updates
    setInterval(() => {
        updateClock();
        updateCountdown();
        updateHeroAndUpNext();
        updateProgress();
        // Re-render day view status every minute roughly
        if (new Date().getSeconds() === 0) {
            renderDayView();
            renderWeeklyGrid();
        }
    }, 1000);

    // Today button
    document.getElementById('todayBtn').addEventListener('click', () => {
        selectedDay = getTodayKey();
        renderDayButtons();
        renderDayView();
        renderWeeklyGrid();
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search
    document.getElementById('searchInput').addEventListener('input', e => {
        searchQuery = e.target.value.trim();
        renderDayView();
    });

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    document.getElementById('completeBtn').addEventListener('click', () => {
        if (!activeModalSession) return;
        const { session } = activeModalSession;
        if (completions[session.id]) {
            delete completions[session.id];
        } else {
            completions[session.id] = true;
        }
        saveCompletions();
        closeModal();
        renderDayView();
        renderWeeklyGrid();
        updateProgress();
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
}

document.addEventListener('DOMContentLoaded', init);