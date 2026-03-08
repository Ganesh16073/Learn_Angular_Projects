exports.generateTasks = async (req, res) => {
  const { goal } = req.body;
  const tasks = [
    `Research about ${goal}`,
    `Create plan for ${goal}`,
    `Start implementing ${goal}`,
    `Test and review ${goal}`,
  ];
  res.json({ tasks });
};
