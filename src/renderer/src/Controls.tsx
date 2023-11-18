function Controls(): JSX.Element {
  return (
    <div id="controls" className="hidden" style={{ display: "none"}}>
      <span id="start_research_btn">
        <i className="ri-play-line ri-4x"></i>
      </span>
      <span id="pause_research_btn" className="hidden">
        <i className="ri-pause-line ri-4x"></i>
      </span>
      <span id="stop_research_btn" className="hidden">
        <i className="ri-stop-line ri-4x"></i>
      </span>
    </div>
  )
}

export default Controls
