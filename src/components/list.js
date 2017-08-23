export function list({ bunny }) {
    return (
        <div style={{
      padding: '10px',
      clear: 'both'
    }}>
      <span>{bunny.title}!</span>
      <section>{bunny.url}</section>
      <section>{bunny.description}</section>
    </div>
    );
}