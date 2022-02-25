export default function HelpForm({form, handleChange, handleSubmit}) {
    return (
            <form onSubmit={handleSubmit}> 
                <div class="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={form.username} name="username" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="problem">How can we help?</label>
                    <textarea id="problem" value={form.problem} name="problem" onChange={handleChange}></textarea>
                </div>
                <div class="form-group">
                    <label htmlFor="zoomUrl">Zoom Link</label>
                    <input type="text" id="zoomUrl" value={form.zoomUrl} name="zoomUrl" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <input type="submit" id="submit" value="Help me Helpdesk!"/>
                </div>
            </form> 
            )
}