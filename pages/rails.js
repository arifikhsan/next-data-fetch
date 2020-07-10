import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

class Rails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { stars } = this.props;
    return (
      <div>
        <p>Rails has {stars} stars ✨</p>
        <Link href="/">
          <a>How about next js?</a>
        </Link>
      </div>
    );
  }
}

Rails.PropTypes = {
  stars: PropTypes.number,
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/rails/rails");
  const json = await res.json();

  return {
    props: {
      stars: json.stargazers_count,
    },
  };
}

export default Rails;
