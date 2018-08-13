import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/timer';

const Timer = ({ time, isInterval, dispatch }) => (
    <div>
        <h1>Timer</h1>
        <span className={'timer ' + (isInterval ? 'text-info' : '')}>{time} {isInterval ? '(interval)' : ''}</span>

        <form>
            <div className="form-group">
                <label>Timer [seconds]</label>
                <input type="text" className="form-control" ref={(input) => this.secondsInput = input} defaultValue={0} />
            </div>
            <div className="form-group">
                <label>Interval time [seconds]</label>
                <input type="text" className="form-control" ref={(input) => this.intervalInput = input} defaultValue={0} />
            </div>
        </form>
        <button className="btn btn-primary" onClick={() => dispatch(startTimer(this.secondsInput.value, this.intervalInput.value))}>Start</button>
        <button className="btn btn-primary ml-2" onClick={() => dispatch(stopTimer())}>Stop</button>
    </div>
)

const mapStateToProps = state => ({
    time: state.timer.time,
    isInterval: state.timer.isInterval,
});

export default connect(mapStateToProps)(Timer);
