const HeadlessCard = ({
  city,
  district,
  street,
  /*  */
}) =&gt; {

  return (/*  */);
};

const HeadlessScreen = ({ cardProps }) =&gt; {
  return (
    &lt;Container&gt;
      {cardProps ? &lt;Card {...cardProps} /&gt; : null}
    &lt;/Container&gt;
  );
}

const useCardProps = () =&gt; {
  const title = [city, district, street].filter(Boolean).join(', ');
  /*  */
  return { title, onClick, buttonText };
};

const HeadlessCard = ({
  /*  */
  hidden,
  /*  */
}) =&gt; {
  if (hidden) return null;

  return (/*  */);
};



const HeadlessList = ({ items, Container, ListItem }) =&gt; {
  return (
    &lt;Container&gt;
      {items.map(item =&gt; item.hidden
          ? null
          : &lt;ListItem {...item} /&gt;)
      }
      {/*  */}
    &lt;/Container&gt;
  );
};

const useListProps = () =&gt; {
  return items.filter(item =&gt; !item.hidden)
}