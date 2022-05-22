import React, { useState, useEffect } from 'react'
 
import { useLazyTranslate } from 'react-google-translate'
 
const Example = () => {
 
  const [text] = useState('test');
  const [language] = useState('zh-CN');
 
  const [translate, { data, loading }] = useLazyTranslate({
    language 
  })
 
  useEffect(() => {
    if (text) {
      translate(text, language);
    }
  }, [translate, text, language])
 
  
    return (
      <div>{loading ? 'Loading...' : data}</div>
    )
  }

  export default Example
