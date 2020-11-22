import React from 'react';

var Keyid = {
    id: 0
};

const Article = ({type, label, content}) => (
    <article className={"r-article " + type}>
        <h3 className="article-label">
            {label}
        </h3>
        <div className="paragraphs">
            {content}
        </div>
    </article>
);

const BiBox = ({left, right}) => (
    <div className="bibox">
        <div className="label info">{left}</div>
        <div className="info">{right}</div>
    </div>
);

const Logo = ({ src, alt, w="40", h="40" }) => (
    <img className="logo" src={src} alt={alt} width={w} height={h}/>
);

const Labelicon = ({ label, icon }) => (
    <div className="labelicon"><span className="icon">{icon}</span> <span className="icondesc">{label}</span></div>
);

const Interestpoint = ({ label, src, alt, desc }) => (
    <BiBox left={
            <Labelicon
                label={label}
                icon={ <Logo src={src} alt={alt} w="20" h="20" /> }
            />
        }
        right={ desc }
    />
);

const Icontxt = ({ icon, txt }) => (
    <div className="svg_txt">
        {icon}
        <span className="svg-txt">{txt}</span>
    </div>
);

export {Article, BiBox, Logo, Labelicon, Interestpoint, Keyid, Icontxt};