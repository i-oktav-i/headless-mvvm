<code>const HeadlessCard = ({,</code>
<code>  city,,</code>
<code>  district,,</code>
<code>  street,,</code>
<code>  /*  */,</code>
<code>}) =&gt; {,</code>

<code>  return (/*  */);,</code>
<code>};,</code>

<code>const useCardProps = () =&gt; {,</code>
<code>  const title = [city, district, street].filter(Boolean).join(', ');,</code>
<code>  /*  */,</code>
<code>  return { title, onClick, buttonText };,</code>
<code>};,</code>

<code>const HeadlessCard = ({,</code>
<code>  /*  */,</code>
<code>  hidden,,</code>
<code>  /*  */,</code>
<code>}) =&gt; {,</code>
<code>  if (hidden) return null;,</code>

<code>  return (/*  */);,</code>
<code>};,</code>

<code>const HeadlessList = ({ items, Container, ListItem }) =&gt; {,</code>
<code>  return (,</code>
<code>    &lt;Container&gt;,</code>
<code>      {items.map(item =&gt; item.hidden,</code>
<code>          ? null,</code>
<code>          : &lt;ListItem {...item} /&gt;),</code>
<code>      },</code>
<code>      {/*  */},</code>
<code>    &lt;/Container&gt;,</code>
<code>  );,</code>
<code>};,</code>

<code>const useListProps = () =&gt; {,</code>
<code>  return items.filter(item =&gt; !item.hidden),</code>
<code>},</code>