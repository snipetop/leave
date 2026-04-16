import React from 'react';

function Profile({ name, role, avatar }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <img
        src={avatar}
        alt={name}
        style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #1f25e8', objectFit: 'cover', marginBottom: 12 }}
      />
      <h2 style={{ margin: 0, fontWeight: 700, color: '#1f25e8' }}>{name}</h2>
      <div style={{ color: '#555', fontSize: '1rem' }}>{role}</div>
    </div>
  );
}

export default Profile; 