const formatDateTime = (date) => {
    return date.toLocaleString('th-TH', {
      weekday: 'long', 
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

export default formatDateTime;

/*
'long' : จะแสดงชื่อวันแบบเต็ม (เช่น วันจันทร์, วันอังคาร)
'short' : จะแสดงชื่อวันแบบย่อ (เช่น จ., อ.)
'narrow' : จะแสดงแค่อักษรย่อตัวเดียว (เช่น จ, อ)
*/