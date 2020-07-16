import React from "react";
import styled from "@emotion/styled";

const JobListItem = ({ id, title, location, source, date }) => {
  return (
    <ListItem>
      <div className="pr3">
        <JobTitle>
          <a href="#5">{title}</a>
        </JobTitle>
        <div>
          <JobLocation>{location}</JobLocation>{" "}
          <JobSource href="#">{source}</JobSource>
        </div>
      </div>
      <JobDate>
        {date.start} &mdash; {date.end}
      </JobDate>
    </ListItem>
  );
};

const ListItem = styled.div`
  background: #fff;
  padding: 1rem;
  font-size: 0.8rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 544px) {
    padding: 1.25rem 1.5rem 2rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const JobTitle = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: 0.7rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const JobSource = styled.a`
  text-decoration: none;
  color: #555;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

const JobLocation = styled.span`
  padding: 0.2rem 0.35rem;
  font-size: 0.75rem;
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  color: #fff;
  margin-right: 0.5rem;
`;

const JobDate = styled.span`
  color: #757575;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  white-space: nowrap;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export default JobListItem;
