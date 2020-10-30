<?php

namespace App\Http\Livewire\Auth;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Login extends Component
{
    public $username;
    public $password;
    
    public function login(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt(['username' => $request->username,'password' => $request->password])){
            return redirect()->route('admin.dashboard');
        }
        else{
            session()->flash('error','Username atau password anda salah');
            return redirect()->route('auth.login');
        }
    }

    public function render()
    {
        return view('auth.login');
    }
}