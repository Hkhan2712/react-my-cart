const SectionHeader = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="section-header text-center mb-4">
		<h2
			className="fw-normal"
			style={{
			fontSize: "1.5rem",
			fontWeight: 400,
			color: "#262626",
			}}
		>
			{title}
		</h2>

		{subtitle && (
			<p className="text-muted mb-2">{subtitle}</p>
		)}

		{ctaText && (
			<a
			href={ctaLink}
			style={{
				color: "#262626",
				textDecoration: "underline",
			}}
			>
			{ctaText}
			</a>
		)}
    </div>
  )
}

export default SectionHeader;
