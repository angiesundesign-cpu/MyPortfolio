export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div>
          <h2>AngieSun</h2>
          <a href="/">Portfolio</a>
          <a href="/work">Work</a>
          <a href="/#expertise">Expertise</a>
          <a href="/aboutme">About Me</a>
        </div>
        <div>
          <h2>Follow</h2>
          <a href="http://www.linkedin.com/in/angiesundesign" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/angiesundesign" target="_blank" rel="noreferrer">Behance</a>
        </div>
        <div className="wechat-contact">
          <div>
            <h2>Let&apos;s connect on WeChat</h2>
            <p>Scan the QR code to start a conversation.</p>
          </div>
          <div className="qr-placeholder" role="img" aria-label="WeChat QR code placeholder">
            <span>微信二维码</span>
            <small>请提供图片</small>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">AngieSun.</div>
      <div className="footer-meta">
        <span>© 2025 by Angie Sun.</span>
        <span><a href="/privacy-policy">Privacy Policy</a> · <a href="/accessibility-statement">Accessibility</a></span>
      </div>
    </footer>
  );
}
