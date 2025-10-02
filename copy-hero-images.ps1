# Copy Hero Images Script
# This script copies your downloaded images to the hero folder

$sourceFolder = "C:\Users\suria\Downloads"
$destinationFolder = "C:\Users\suria\OneDrive\Desktop\srk educational society 2\frontend\public\hero"

# Define the source and destination file mappings
$imageMappings = @(
    @{Source = "g2.jpg"; Destination = "slide1.jpg"},
    @{Source = "image 2.jpg"; Destination = "slide2.jpg"},
    @{Source = "image 3.jpg"; Destination = "slide3.jpg"},
    @{Source = "image 4.jpg"; Destination = "slide4.jpg"},
    @{Source = "image 5.jpg"; Destination = "slide5.jpg"},
    @{Source = "image 6.jpg"; Destination = "slide6.jpg"},
    @{Source = "image 7.jpg"; Destination = "slide7.jpg"}
)

Write-Host "Starting to copy hero images..." -ForegroundColor Green
Write-Host ""

foreach ($mapping in $imageMappings) {
    $sourcePath = Join-Path $sourceFolder $mapping.Source
    $destPath = Join-Path $destinationFolder $mapping.Destination
    
    if (Test-Path $sourcePath) {
        try {
            Copy-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "Copied: $($mapping.Source) to $($mapping.Destination)" -ForegroundColor Green
        }
        catch {
            Write-Host "Failed to copy: $($mapping.Source)" -ForegroundColor Red
            Write-Host "Error: $_" -ForegroundColor Red
        }
    }
    else {
        Write-Host "Source file not found: $($mapping.Source)" -ForegroundColor Yellow
        Write-Host "Looking for: $sourcePath" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Image copy process completed!" -ForegroundColor Green
