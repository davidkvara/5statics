import React from "react";
import styled from "styled-components";

const PersonCard = props => (
  <Card>
    <CardAvatar />
    <Testimonial>
      “Teachers can click a button &amp; get all their student information at
      one time. Leaders can compare data across schools and collaborate.”
    </Testimonial>
    <Author>― Riley Kennedy</Author>
    <div className="card-job-title">Chief of Staff, Collegiate Academies</div>
  </Card>
);

const Card = styled.div`
  text-align: center;
  margin-top: -76px;
  padding: 0 2rem;
  color: #fff;
`;

const Avatar = styled.img`
  margin: 0 auto 2.6rem;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const Testimonial = styled.h4`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 0;
  padding: 0 0 1rem;
  font-weight: 500;
`;

const Author = styled.div`
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
`;

const CardAvatar = props => (
  <Avatar src="https://www.schoolrunner.org/img/rKennedy.jpg" alt="" />
);

export default PersonCard;
