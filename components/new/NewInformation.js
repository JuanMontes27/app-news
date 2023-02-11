import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { helpHttp } from "../../helpers/helpHttp";
import Information from "./Information";

const NewInformation = ({ route }) => {
  const [infoNew, setInfoNew] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = route.params;
  let api = `https://notigram.com/wp-json/wp/v2/posts/${id}?_embed`;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(api)
      .then((res) => {
        if (!res.err) {
          setInfoNew(res);
          setError(null);
        } else {
          setInfoNew(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [api]);

  return (
    <>
      {loading && <ActivityIndicator size="large" color="#2543cc" />}
      {infoNew && (
        <Information
          title={infoNew.title.rendered}
          image={infoNew._embedded["wp:featuredmedia"][0]["source_url"]}
          content={infoNew.content.rendered}
        />
      )}
    </>
  );
};

export default NewInformation;
