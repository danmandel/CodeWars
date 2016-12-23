const spread = (func, args) => func.apply(null, args); // func.apply(this, args); might be better if spread is called in a different context like though apply/bind/call or by placing it on an object.
