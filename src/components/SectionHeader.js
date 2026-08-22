function SectionHeader({ num, slug, title, subtitle }) {
  return (
    <div className="section-header">
      <p className="section-label">
        <span>{num}.</span>
        <span className="section-diamond">◆</span>
        <span className="section-slug">{slug}</span>
      </p>
      <div className="section-title-row">
        <h2 className="section-title">{title}</h2>
        <div className="section-divider" />
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
export default SectionHeader;