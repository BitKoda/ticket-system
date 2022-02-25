export default function HelpForm({form, handleChange, handleSubmit}) {
    return (
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input  type="text" 
                            id="username" 
                            value={form.username} 
                            name="username" 
                            onChange={handleChange} 
                            required />
                </div>
                <div className="form-group">
                    <label htmlFor="problem">How can we help?</label>
                    <textarea   id="problem" 
                                value={form.problem} 
                                name="problem" 
                                onChange={handleChange} 
                                required>
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="zoomUrl">Zoom Link</label>
                    <input  type="text" 
                            id="zoomUrl" 
                            value={form.zoomUrl} 
                            name="zoomUrl" 
                            onChange={handleChange} 
                            required/>
                </div>
                <div className="form-group">
                    <input type="submit" id="submit" value="Help me Helpdesk!"/>
                </div>
            </form> 
            )
}