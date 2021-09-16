function BackgroundVideo() {
  return (
    <video className="relative" autoPlay loop muted id="video">
      <source src="/videos/solar.mp4" type="video/mp4"></source>
    </video>
  );
}

export default BackgroundVideo;
