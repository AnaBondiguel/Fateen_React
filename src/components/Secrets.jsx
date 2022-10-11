import React from "react";
import Card from "./Card";

const Secrets = () => {
  const items = [
    {
      heading: "Discount #1",
      title: " 10% Off!",
      date: "Only on Monday",
      description:
        "All day, every Monday until December 1st. You know where to find me",
    },
    {
      heading: "Discount #2",
      title: "Lifetime subscription.",
      date: "Anytime.",
      description: "Infinite visits to my shop..",
    },
    {
      heading: "Event #1",
      title: "Purify your shadow pokemon.",
      date: "August 1st.",
      description: "Not a cult."
    },
  ];

  return (
    <section id="secrets">
      <div>
        <h2>Secrets</h2>
        <a href="#top">Top</a>
      </div>
      <h3>Here you will find my secret discounts and events just for you!</h3>
        
        
      {items.map(({ heading, title, date, description }, id) => (
        <Card
          key={id}
          heading={heading}
          title={title}
          date={date}
          description={description}
        ></Card>
      ))}
    </section>
  );
};

export default Secrets;





    {/* <h4>Discount #1</h4>
   <ul>
           <li><b>Title:</b> 10% Off!</li>
           <li><b>Date:</b> Only on Monday</li>
           <li><b>Description:</b> All day, every Monday until December 1st. You know where to find me.</li>
   </ul>
   <h4>Discount #2</h4>
   <ul>
           <li><b>Title:</b> Lifetime subscription.</li>
           <li><b>Date:</b> Anytime.</li>
           <li><b>Description:</b> Infinite visits to my shop.</li>
   </ul>
   <h4>Event #1</h4>
   <ul>
           <li><b>Title:</b> Purify your shadow pokemon.</li>
           <li><b>Date:</b> August 1st</li>
           <li><b>Description:</b> Not a cult.</li>
   </ul> */}
