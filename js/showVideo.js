export const showVideo = (link, frame, overlay) => {

    const videoId = link.getAttribute('data-video-id');
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=1`;

    frame.src = videoUrl;
    overlay.style.display = 'block';

}
