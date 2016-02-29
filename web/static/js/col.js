import React from "react";

export default ({md, lg, xs, sm, children, className, style}) => {
	let sizes = {md,lg,xs,sm};
	let colClass = Object.keys(sizes)
		.filter(k => sizes[k])
		.map(k => `col-${k}-${sizes[k]}`)
		.join(' ');

	className = `${className} ${colClass}`;
	return <div className={className} style={style}>{children}</div>;
};