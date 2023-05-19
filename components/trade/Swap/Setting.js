import React from 'react'
// import "./Setting.css";
function Setting({ setSlippage, setDeadLine }) {
  const NumericOnly = e => {
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0, preval.length - 1)
  }
  return (
    <div>
      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Settings</h4>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
            </div>
            <div className='modal-body-1'>
              <div className='swaps-liquidation'>
                <p>SWAP</p>
                <h4>
                  Slippage Tolerance <i className='fa fa-question-circle'></i>
                </h4>
                <ul style={{ marginBottom: '15px' }}>
                  <li>
                    <a onClick={() => setSlippage(0.1)}>0.1%</a>
                  </li>
                  <li>
                    <a onClick={() => setSlippage(0.5)}>0.5%</a>
                  </li>
                  <li>
                    <a onClick={() => setSlippage(1)}>1.0%</a>
                  </li>
                  <li>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='2%'
                      min={1}
                      max={49}
                      onChange={e => setSlippage(e.target.value)}
                    />
                  </li>
                </ul>
                <div className='details'>
                  <div className='label'>
                    Tx deadline (mins) <i className='fa fa-question-circle'></i>{' '}
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='20'
                    onChange={e => setDeadLine(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
