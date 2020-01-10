const express = require("express");
const router = express.Router();

const { projects } = require("../data.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const title = projects[id].project_name;
  const desc = projects[id].description;
  const tech = projects[id].technologies;
  const live = projects[id].live_link;
  const github = projects[id].github_link;
  const images = projects[id].image_urls;

  const templateData = {
    title,
    desc,
    tech,
    live,
    github,
    images
  };
  res.render("project", templateData);
});

module.exports = router;
