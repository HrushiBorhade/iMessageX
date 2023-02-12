import { Session } from "next-auth";
import React from "react";

type FeedWrapperProps = {
  session: Session;
};

const FeedWrapper: React.FC<FeedWrapperProps> = () => {
  return <div>Feed Wrapper</div>;
};
export default FeedWrapper;
