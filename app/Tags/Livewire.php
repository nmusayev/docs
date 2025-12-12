<?php

namespace App\Tags;

use Livewire\Mechanisms\FrontendAssets\FrontendAssets;
use Statamic\Tags\Tags;

class Livewire extends Tags
{
    public function styles()
    {
        return FrontendAssets::styles();
    }

    public function scriptConfig()
    {
        return FrontendAssets::scriptConfig();
    }
}
