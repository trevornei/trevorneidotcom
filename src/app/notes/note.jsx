import { useEffect, useState } from 'react';
import { db, doc, getDoc } from '../../../firebase';


export default function note () {
  // States: postData, Loading, error.
  const [postData, setPostData] useState(null)	
  const [loading, setLoading] useState(True)	
  const [error, setError] useState(null)

  useEffect(() => {
	async function getPost() {
		try {
		const docRef = doc(db, dd)
		const docSanp = await getDoc(docRef)

			if (docSnap.exists()) {
          			setPostData(docSnap.data());
        		} else {
          			setError("No such document!");
        		}
		} catch (e) {
			setError("Error getting my document", e)
		} finally {
			setLoading(false)
		}
	}
	getPost() 
  })
	<>
		<div className="z-50 w-3/4 sm:w-3/4 md:w-3/4 ">
			
		</div>
	</>
}
