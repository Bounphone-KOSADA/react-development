import {useState} from 'react';

function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

function PreventRenderingExample() {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={() => setShowWarning(!showWarning)}>
        {showWarning ? 'Hide' : 'Show'} Warning
      </button>
    </div>
  );
}

export default PreventRenderingExample;