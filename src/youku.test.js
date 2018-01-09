import React from "react";
import renderer from "react-test-renderer";
import YoukuEmbedVideo from "./youku";

test("Default settings, need only video ID", () => {
  const component = renderer.create(
    <YoukuEmbedVideo videoId="XNDg1NTEyMjA=" />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Enhanced privacy mode and autoplay", () => {
  const component = renderer.create(
    <YoukuEmbedVideo videoId="XNDg1NTEyMjA=" enhancedPrivacy={true} autoplay={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Largest size without suggestions and media controls", () => {
  const component = renderer.create(
    <YoukuEmbedVideo width={1280} height={720} videoId="XNDg1NTEyMjA=" suggestions={false} controls={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Medium size", () => {
  const component = renderer.create(
    <YoukuEmbedVideo videoId="XNDg1NTEyMjA=" size="medium" />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
