con = con.replace(/(?:(?:https?|ftp):\/\/|www\.|\\\\)[^\s/$.?#].[^\s]*/g, `<a class="link" href="javascript:clickLink('$&')">$&</a>`);
