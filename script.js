let currentAudio = null; // To track the currently playing audio
let currentPlayPauseIcon = null; // To track the play/pause icon of the currently playing audio
let audioContext;
let analyser;
let dataArray;

function createPlayer(data) {
    const audioPlayer = document.createElement('div');
    audioPlayer.className = 'audio-player';
    const imageUrlJpg = `./assets/covers/${data.name}.jpg`;
    const imageUrlPng = `./assets/covers/${data.name}.png`;

    const setBackgroundImage = (url) => {
        audioPlayer.style.backgroundImage = `url('${url}')`;
    };

    const img = new Image();
    img.src = imageUrlJpg;

    img.onload = () => {
        setBackgroundImage(imageUrlJpg);
    };

    img.onerror = () => {
        img.src = imageUrlPng;

        img.onload = () => {
            setBackgroundImage(imageUrlPng);
        };

        img.onerror = () => {
            console.error(`Both ${imageUrlJpg} and ${imageUrlPng} failed to load.`);
        };
    };
    const audioBox = document.createElement('div');
    audioBox.className = 'audio-box';

    const audioName = document.createElement('p');
    audioName.className = 'audio-name';
    audioName.textContent = `${data.name} (${data.genre})`;

    const audioControls = document.createElement('div');
    audioControls.className = 'audio-controls';

    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'playPauseBtn';

    const playPauseIcon = document.createElement('img');
    playPauseIcon.src = "https://www.svgrepo.com/show/512674/play-1003.svg";
    playPauseIcon.className = 'playPauseIcon';
    playPauseBtn.appendChild(playPauseIcon);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressBar.appendChild(progressFill);

    const audioTime = document.createElement('p');
    audioTime.className = 'audio-time';
    audioTime.textContent = '0:00';

    const audio = document.createElement('audio');
    const source = document.createElement('source');
    source.src = data.source;
    source.type = 'audio/mpeg';
    audio.appendChild(source);

    audioControls.appendChild(playPauseBtn);
    audioControls.appendChild(progressBar);
    audioControls.appendChild(audioTime);
    audioBox.appendChild(audioName);
    audioBox.appendChild(audioControls);
    audioBox.appendChild(audio);

    audioPlayer.appendChild(audioBox);
    document.getElementById('music-list').appendChild(audioPlayer);

    assignEvents(audio, playPauseBtn, playPauseIcon, progressBar, progressFill, audioTime);
}

function assignEvents(audio, playPauseBtn, playPauseIcon, progressBar, progressFill, audioTime) {
    let isDragging = false;

    playPauseBtn.addEventListener('click', () => {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentPlayPauseIcon.src = "https://www.svgrepo.com/show/512674/play-1003.svg";
            stopVisualizer();
        }

        if (audio.paused) {
            audio.play();
            playPauseIcon.src = "https://www.svgrepo.com/show/512622/pause-1006.svg";
            currentAudio = audio;
            currentPlayPauseIcon = playPauseIcon;
            startVisualizer(audio);
        } else {
            audio.pause();
            playPauseIcon.src = "https://www.svgrepo.com/show/512674/play-1003.svg";
            currentAudio = null;
            currentPlayPauseIcon = null;
            stopVisualizer();
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (!isDragging) {
            const percentage = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${percentage}%`;

            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60);
            audioTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    });

    progressBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
        updateProgress(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            updateProgress(e);
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    const updateProgress = (e) => {
        const rect = progressBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
        const newTime = percentage * audio.duration;
        audio.currentTime = newTime;
        progressFill.style.width = `${percentage * 100}%`;
    };
}

function startVisualizer(audio) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;

    dataArray = new Uint8Array(analyser.frequencyBinCount);
    drawVisualizer();
}

function stopVisualizer() {
    if (audioContext) {
        audioContext.close();
        audioContext = null;
    }
}

// thank you chat gee pee tee :pray:
function drawVisualizer() {
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barCount = dataArray.length;
    const barWidth = (canvas.width / barCount) * 0.75;
    let barHeight;
    let x = 0;

    for (let i = 0; i < barCount; i++) {
        barHeight = dataArray[i] / 2;

        ctx.fillStyle = 'white';
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + (canvas.width / barCount) * 0.40;
    }

    setTimeout(() => {
        drawVisualizer();
    }, 10);
}

function createProjectCard(project) {
    const anchor = document.createElement('a');
    anchor.href = project.href;

    const projectCol = document.createElement('div');
    projectCol.id = 'project-col';
    projectCol.style.backgroundImage = `url('${project.image}')`;

    const centeredText = document.createElement('div');
    centeredText.id = 'centeredtext';

    const h2 = document.createElement('h2');
    h2.textContent = project.name;

    const p = document.createElement('p');
    p.textContent = project.description;

    centeredText.appendChild(h2);
    centeredText.appendChild(p);
    projectCol.appendChild(centeredText);
    anchor.appendChild(projectCol);

    document.getElementById('project-list').appendChild(anchor);
}

function loadAudioList() {
    fetch('./audio-list.json')
        .then(response => response.json())
        .then(data => {
            data.list.forEach(item => {
                createPlayer(item);
            });
        })
        .catch(error => console.error('Error loading audio list:', error));
}

function loadProjectList() {
    fetch('./project-list.json')
        .then(response => response.json())
        .then(data => {
            data.list.forEach(item => {
                createProjectCard(item);
            });
        })
        .catch(error => console.error('Error loading project list:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        document.getElementById("whole").classList.remove("hidden");
        document.getElementById("wawaloader").classList.add("hidden");
        loadAudioList();
        loadProjectList();
        document.getElementById("profile-image").onclick = () => {
            const audio = new Audio(`./assets/core/meow${Math.floor(Math.random() * 4) + 1}.ogg`);
            audio.play();
        };
    
        const cursor = document.getElementById('cursor');
    
        document.addEventListener('mousemove', (event) => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        });
    },1000);
});

function switchPanel(name) {
    document.getElementById("projects").classList.add("hidden");
    document.getElementById("musics").classList.add("hidden");

    document.getElementById(name).classList.remove("hidden");
}