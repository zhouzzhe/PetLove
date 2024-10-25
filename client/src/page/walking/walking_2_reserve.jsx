import React from "react";

function WalkingReserve(prop) {
  return (
    <React.Fragment>
      <div className="position-relative mt-5">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <div Name="py-3">
                <button
                  className="btn btn-warning rounded-5 mx-2"
                  style={{width: "120px"}}
                >
                  狗
                </button>
                <button
                  className="btn btn-warning rounded-5 mx-2"
                  style={{width: "120px"}}
                >
                  貓
                </button>
              </div>
              <div className="py-3 d-flex">
                <p className="my-auto px-3">1.所在位置</p>
                <select className="mx-2" name="city" id="">
                  <option value="">台中市</option>
                </select>
                <select className="mx-2" name="area" id="">
                  <option value="">南屯區</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="py-3 d-flex">
                <div className="my-auto px-3">2.希望保母性別</div>
                <select className="mx-2" name="gender" id="">
                  <option value="">男</option>
                  <option value="">女</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="60"
              viewBox="0 0 92 60"
              fill="none"
            >
              <ellipse
                cx="44.6628"
                cy="34.2818"
                rx="17.6237"
                ry="13.0367"
                fill="black"
              />
              <ellipse
                cx="38.3859"
                cy="42.4903"
                rx="17.6237"
                ry="16.4166"
                fill="black"
              />
              <ellipse
                cx="51.4225"
                cy="42.7318"
                rx="17.6237"
                ry="16.658"
                fill="black"
              />
              <ellipse
                cx="11.3468"
                cy="26.0735"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="34.0401"
                cy="8.69114"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="63.0108"
                cy="8.69114"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="80.3932"
                cy="29.9363"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="d-flex justify-content-end position-absolute"
            style={{right: "21%"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="60"
              viewBox="0 0 92 60"
              fill="none"
            >
              <ellipse
                cx="44.6628"
                cy="34.2818"
                rx="17.6237"
                ry="13.0367"
                fill="black"
              />
              <ellipse
                cx="38.3859"
                cy="42.4903"
                rx="17.6237"
                ry="16.4166"
                fill="black"
              />
              <ellipse
                cx="51.4225"
                cy="42.7318"
                rx="17.6237"
                ry="16.658"
                fill="black"
              />
              <ellipse
                cx="11.3468"
                cy="26.0735"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="34.0401"
                cy="8.69114"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="63.0108"
                cy="8.69114"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
              <ellipse
                cx="80.3932"
                cy="29.9363"
                rx="11.3468"
                ry="8.69114"
                fill="black"
              />
            </svg>
          </div>

          <div className="d-flex justify-content-end py-5">
            <div className="my-5 py-5 d-inline align-bottom">
              <progress className="d-inline align-bottom" value="100"></progress>
              <div className="d-inline align-bottom me-4 ms-2">3/3</div>
              <a
                href="/walking/search"
                className="btn btn-warning rounded-5 p-3"
                style={{width: "150px"}}
              >
                尋找
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WalkingReserve;
