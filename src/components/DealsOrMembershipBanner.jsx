import React from "react";

function DealsOrMembershipBanner() {
  return (
    <div style={{
      width: '100%',
      background: '#232347',
      color: '#fff',
      padding: '32px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{fontSize: '1.35rem', fontWeight: 700, marginBottom: 8}}>Supercharge your shop with Etsy Plus</div>
      <div style={{fontSize: '1.08rem', color: '#efefef', marginBottom: 14}}>Exclusive tools and perks for serious sellers & shoppers.</div>
      <a href="#" style={{background: '#f1641e', color: '#fff', padding: '12px 36px', borderRadius: 24, fontWeight: 600, fontSize: 16, textDecoration: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.10)'}}>Join Etsy Plus</a>
    </div>
  );
}

export default DealsOrMembershipBanner;
