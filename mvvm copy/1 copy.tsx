const Card = ({ cardId }) =&gt; {
  const title = /*  */;
  const buttonText = /*  */;

  const onClick = () =&gt; {/*  */};

  return (
    &lt;Cell className="container"&gt;
      &lt;Heading className="title" level={2}&gt;
        {title}
      &lt;/Heading&gt;

      &lt;Button onClick={onClick} variant="primary" fullWidth className="button"&gt;
        {buttonText}
      &lt;/Button&gt;
    &lt;/Cell&gt;
  )
}

const CardAnother = ({ cardId }) =&gt; {
  const title = /*  */;
  const buttonText = /*  */;

  const onClick = () =&gt; {/*  */};

  return (
    &lt;Content&gt;
      &lt;Header  level={2}&gt;
        {title}
      &lt;/Heading&gt;

      &lt;Button onClick={onClick} variant="primary" fullWidth&gt;
        {buttonText}
      &lt;/Button&gt;
    &lt;/Content&gt;
  )
}


const Card = () =&gt; {
  const title = /*  */;
  const buttonText = /*  */;

  const onClick = () =&gt; {/*  */};

  return (
    &lt;div className="container"&gt;
      &lt;h2 className="title"&gt;{title}&lt;/h2&gt;

      &lt;button className="button" onClick={onClick}&gt;
        {buttonText}
      &lt;/button&gt;
    &lt;/div&gt;
  )
}

const Card2 = () =&gt; {
  const title = /*  */;
  const buttonText = /*  */;

  const onClick = () =&gt; {/*  */};

  return (
    &lt;div className="container2"&gt;
      &lt;h2 className="title2"&gt;{title}&lt;/h2&gt;

      &lt;button className="button2" onClick={onClick}&gt;
        {buttonText}
      &lt;/button&gt;
    &lt;/div&gt;
  )
}

const Screen = () => {
  const cardId = /*  */;
  
  return (
    &lt;Container className="screen"&gt;
      &lt;Card cardId={cardId} /&gt;
    &lt;/Container&gt;
  );
}