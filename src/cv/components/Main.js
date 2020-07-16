import React from "react";
import Container from "./common/Container";
import ListItem from "./ListItem";

const jobs = [
  {
    title: "ბუღალტერი",
    source: "ტრანსიბირია",
    location: "თბილისი",
    date: {
      start: "დღეს",
      end: "16ივლ"
    },
    url: "",
    id: "8798"
  },
  {
    title: "კორპორატიული გაყიდვების სპეციალისტი",
    source: "დასაქმების სააგენტო ეიჩარი",
    location: "თბილისი",
    date: {
      start: "1ივლ",
      end: "15ივლ"
    },
    url: "",
    id: "5467"
  }
];

const Main = () => {
  return (
    <main className="pv5" style={{ background: "#f4f4f4" }}>
      <Container>
        {jobs.map(job => (
          <ListItem key={job.id} {...job} />
        ))}
      </Container>
    </main>
  );
};

export default Main;
