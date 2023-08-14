import React from "react";
import '../sass/css/Addannouncement.css';
const Add_Announcent=()=>{
    return(
        <div class="row">
          <div class="md-6 justify-content-center">
        <div className="parent2">
        <form className="form bg-blue">
          <div className="form-group">
            <label htmlFor="announcement">Type Announcement</label>
            <textarea className="form-control" id="announcement" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="file">Attach File</label>
            <input type="file" className="form-control-file" id="file" name="file" />
          </div>
          <div className="form-group">
            <h4>choose the concerned school</h4>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc1" name="school" value="CIT" />
              <label className="form-check-label" htmlFor="sc1">CIT</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc2" name="school" value="AF" />
              <label className="form-check-label" htmlFor="sc2">AF</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc3" name="school" value="Ed" />
              <label className="form-check-label" htmlFor="sc3">Education</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc4" name="school" value="law" />
              <label className="form-check-label" htmlFor="sc4">Law</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc5" name="school" value="pg" />
              <label className="form-check-label" htmlFor="sc5">Postgraduate</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="sc6" name="school" value="all" />
              <label className="form-check-label" htmlFor="sc6">ALL</label>
            </div>
          </div>
          <div className="form-group">
            <h4>select the concerned session</h4>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="ss1" name="schedule" value="dy" />
              <label className="form-check-label" htmlFor="ss1">Day</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="ss2" name="schedule" value="ev" />
              <label className="form-check-label" htmlFor="ss2">Evening</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="ss3" name="schedule" value="wk" />
              <label className="form-check-label" htmlFor="ss3">Weekend</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="ss4" name="schedule" value="all" />
              <label className="form-check-label" htmlFor="ss4">All</label>
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary">Upload</button>
            <button type="button" className="btn btn-secondary">Clear</button>
            <button type="button" className="btn btn-secondary">Exit</button>
          </div>
        </form>
      </div>
     </div>
    </div>
            
    )
};
export default Add_Announcent;


