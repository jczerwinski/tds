```
initialState = {
  choice: undefined
};

const setChoice = (value) => setState({choice: value});

<Box tag="fieldset" between={2}>
  <Radio label="Choice A" name="group1" value="a" checked={state.choice === "a"} onChange={e => setChoice(e.target.value)} />
  <Radio label="Choice F" name="group1" value="b" checked={state.choice === "b"} onChange={e => setChoice(e.target.value)} />
</Box>
```