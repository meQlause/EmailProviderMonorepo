import React from 'react'

const PageHead = (title) => {
  React.useEffect(() => {
    document.title = ` EmailProvider | ${title}`
  }, []);
};

export default PageHead;