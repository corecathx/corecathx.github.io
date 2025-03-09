import os
import subprocess
from tqdm import tqdm

# Paths
SOURCE_DIR = r"D:\CodingLol\corecat\assets\audio"
DEST_DIR = r"D:\CodingLol\coretest\test\public\tracks"
FFMPEG_PATH = r"D:\Program Files\ffmpeg\bin\ffmpeg.exe"  # Ensure this is correct

# Ensure the destination directory exists
os.makedirs(DEST_DIR, exist_ok=True)

# Get list of WAV files
wav_files = [f for f in os.listdir(SOURCE_DIR) if f.lower().endswith(".wav")]

if not wav_files:
    print("No WAV files found in the source directory.")
    exit()

print(f"Found {len(wav_files)} WAV files. Converting to MP3...")

# Convert each file with progress bar
for wav_file in tqdm(wav_files, desc="Converting", unit="file"):
    wav_path = os.path.join(SOURCE_DIR, wav_file)
    mp3_filename = os.path.splitext(wav_file)[0] + ".mp3"
    mp3_path = os.path.join(DEST_DIR, mp3_filename)

    # FFmpeg command for highest-quality MP3 conversion
    cmd = [
        FFMPEG_PATH,
        "-i", wav_path,  # Input file
        "-b:a", "320k",  # Bitrate: 320kbps (highest quality)
        "-ar", "44100",  # Sample rate: 44.1 kHz (CD quality)
        "-ac", "2",      # Stereo channels
        "-y",            # Overwrite existing files
        mp3_path
    ]

    # Run the FFmpeg command
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    print(f"Converted: {wav_file} -> {mp3_filename}")

print("Conversion completed successfully!")
