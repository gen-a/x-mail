import React from 'react'

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

function InputFile({
                       input: {value: omitValue, onChange, onBlur, ...inputProps},
                       meta: omitMeta,
                       ...props
                   }){
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    )
}
/*
upload(files) {
  const config = {
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
      console.log(percentCompleted)
    }
  }

  let data = new FormData()
  data.append('file', files[0])

  axios.put('/endpoint/url', data, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
 */
export default InputFile;
