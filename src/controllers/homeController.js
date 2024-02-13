const index = (req, res) => {
  res.render("home", { title: "Welcome home!" });
};

export { index };
