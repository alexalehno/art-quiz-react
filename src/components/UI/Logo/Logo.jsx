
function Logo({ href, src, target, cls }) {
  const styles = [...cls ? cls : ''].join(' ');

  return (
    <a href={href} target={target}>
      <img className={styles} src={src} alt='icon'/>
    </a>
  )
}

export default Logo;