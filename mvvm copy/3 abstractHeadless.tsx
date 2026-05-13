const useCardProps = ({ itemId }) =&gt; {
  /*  */
  return { title, onClick, buttonText };
};

const Card = ({ itemId }) =&gt; {
  const { title, onClick, buttonText } = useCardProps(itemId);

  return (
    &lt;Cell className="container"&gt;
      &lt;Heading className="title" level={2}&gt;
        {title}
      &lt;/Heading&gt;

      &lt;Button onClick={onClick} variant="primary" fullWidth className="button"&gt;
        {buttonText}
      &lt;/Button&gt;
    &lt;/Cell&gt;
  );
};

const Card = ({ itemId }) =&gt; {
  const { title, onClick, buttonText } = useCardProps(itemId);

  return (
    &lt;Container&gt;
      &lt;Title&gt;{title}&lt;/Title&gt;

      &lt;Button onClick={onClick}&gt;{buttonText}&lt;/Button&gt;
    &lt;/Container&gt;
  );
};

const CardContainer = ({ children }) =&gt; (
  &lt;Cell className="container"&gt;{children}&lt;/Cell&gt;
);
const CardTitle = ({ children }) =&gt; (
  &lt;Heading level={2} className="title"&gt;
    {children}
  &lt;/Heading&gt;
);
const CardTitle = ({ onClick, children }) =&gt; (
  &lt;Button onClick={onClick} variant="primary" fullWidth className="button"&gt;
    {children}
  &lt;/Button&gt;
);

const Screen = () => {
  const cardId = /*  */;
  
  return (
    &lt;Container&gt;
      &lt;Card cardId={cardId} /&gt;
    &lt;/Container&gt;
  );
}

type Title = ComponentType&lt;TitleProps&gt;;