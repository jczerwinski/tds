/**
 * SelectorCounter lets a user choose a number in increments of one, by
 * clicking increment/decrement buttons.
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import CounterButton from './CounterButton';

if (process.env.BROWSER) {
  require('./SelectorCounter.scss');
}

const propTypes = {
  defaultValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  id: PropTypes.string,
  incrementorLabel: PropTypes.string,
  decrementorLabel: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  successful: PropTypes.bool
};

const defaultProps = {
  defaultValue: 0,
  max: null,
  min: 0,
  id: null,
  incrementorLabel: 'Increase value',
  decrementorLabel: 'Decrease value'
};

export default class SelectorCounter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.state = {
      value: props.defaultValue
    };
  }

  handleChange(value) {
    this.setState({ value });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
  }

  /**
   * Handle the "increment" button
   * @param event
   */
  handleIncrement(event) {
    event.preventDefault();
    this.handleChange(parseInt(this.state.value, 10) + 1);
  }

  /**
   * Handle the "decrement" button
   * @param event
   */
  handleDecrement(event) {
    event.preventDefault();
    this.handleChange(parseInt(this.state.value, 10) - 1);
  }

  /**
   * Handle when the user types in a freeform value
   * @param event
   */
  handleInput(event) {
    this.handleChange(event.target.value);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const {
      className,
      incrementorLabel,
      decrementorLabel,
      disabled,
      id,
      invalid,
      max,
      min,
      successful
    } = this.props;
    const value = this.state.value;

    const cssClasses = {
      'selector-counter--disabled': disabled,
      'selector-counter--error': invalid,
      'selector-counter--successful': successful
    };

    return (
      <div className={classNames('selector-counter', className, cssClasses)}>
        <input
          ref={(input) => this.input = input}
          id={id}
          type="number"
          value={value}
          className="selector-counter__value"
          disabled={disabled}
          onChange={this.handleInput}
          max={max}
          min={min}
          aria-invalid={invalid}
          aria-labeledby={this.props['aria-labeledby']}
          aria-describedby={this.props['aria-describedby']}
          aria-live="polite"
          aria-atomic="true"
        />
        <CounterButton
          label={incrementorLabel}
          icon="caret-up"
          onClick={this.handleIncrement}
          disabled={disabled === true || (typeof max === 'number' && value >= max)}
          aria-controls={id}
        />
        <CounterButton
          label={decrementorLabel}
          icon="caret-down"
          onClick={this.handleDecrement}
          disabled={(disabled === true || value <= min)}
          aria-controls={id}
        />
      </div>
    );
  }
}

SelectorCounter.propTypes = propTypes;

SelectorCounter.defaultProps = defaultProps;